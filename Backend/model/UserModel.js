import mongoose from "mongoose";
import bcrypt from "bcryptjs"

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

 userSchema.methods.comparePassword= async function(password){

    return await bcrypt.compare( password, this.password)
 }

const User = mongoose.model("User", userSchema);
export default User;