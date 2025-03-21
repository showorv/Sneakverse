import {Router} from "express"
import express from "express";
import multer from "multer";
import streamifier from "streamifier";
import { v2 as cloudinary } from "cloudinary";
import { adminMiddleware } from "../middleware/admin-middleware.js";
import { userMiddleware } from "../middleware/User-middleware.js";

const router = Router()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})

//set the multer

const upload = multer({storage: multer.memoryStorage()})

// Function to upload buffer stream to Cloudinary
const uploadToCloudinary = (buffer) => {
    return new Promise((resolve, reject) => {
      let stream = cloudinary.uploader.upload_stream(
        { folder: "uploads" },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
  

      // use streamifier to convert file buffer to stream
      streamifier.createReadStream(buffer).pipe(stream);
    });
  };


router.post("/",userMiddleware,adminMiddleware, upload.single("image"), async(req,res)=>{
    try {
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" });
        }
        //call the uploadcloudinary
        const result = await uploadToCloudinary(req.file.buffer);

        //respond with upload image url
        res.json({ url: result.secure_url });
      } catch (error) {
        res.status(500).json({ error: "Upload failed", error:error.message });
      }
})






export default router;
