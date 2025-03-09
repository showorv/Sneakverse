import mongoose from "mongoose";

const connectDB = async()=>{
   try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongodb connected successfully");
   } catch (error) {
    console.error("mongodb connection failed",error);
    process.exit(1)
   }
}

export default connectDB;