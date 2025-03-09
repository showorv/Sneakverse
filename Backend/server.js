import  express  from "express";
import cors from "cors";
import 'dotenv/config'
import { configDotenv } from "dotenv";
import connectDB from "./config/db.js";


const app = express()

app.use(cors())

// use json before router for handle json data in req body
app.use(express.json())



const PORT = process.env.PORT || 9000;




app.get("/" , (req,res)=>{
    res.send("hello backend")
})


connectDB().then(()=>{
    
    app.listen(PORT, ()=>{
        console.log(`server is running at ${PORT}`); //http://localhost:9000
    })
})