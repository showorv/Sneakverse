import mongoose from "mongoose";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: [/.+\@.+\..+/, "Please enter valid email"]
    },

    password: {
        type: String,
        required: true,
        minLength: 6
    },
    role: {
        type: String,
        enum: ["customer", "admin"],
        default: "customer"
    }
}, {timestamps: true})


//! before data save its hash the password. worked as middleware

userSchema.pre("save", async function(next){

    const user = this;

    if( ! user.isModified("password")){
      return  next()
    }
    try {
        
        const saltround = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, saltround)
        user.password = hash_password;
        next()
    } catch (error) {
        next(error)
    }

})

// compare password middleware

 userSchema.methods.comparePassword= async function(passwords){

    return await bcrypt.compare( passwords, this.password)
 }


 // generate token

 userSchema.methods.generateToken = async function () {
    try {
      return jwt.sign(
        {
          userId: this._id.toString(),
          email: this.email,
          role: this.role,
        },
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: "30d",
        }
      );
    } catch (error) {
      console.error("JWT Error:", error);
      return null; // Return null explicitly to avoid undefined issues
    }
  };
const User = mongoose.model("User", userSchema);
export default User;