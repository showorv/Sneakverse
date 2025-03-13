import  express  from "express";
import cors from "cors";
import 'dotenv/config'
import connectDB from "./config/db.js";
import router from "./routes/userRoute.js";
import productRoter from "./routes/productRoute.js"


const app = express()

app.use(cors())

// use json before router for handle json data in req body
app.use(express.json())



const PORT = process.env.PORT || 9000;


//routes for user

app.use( "/api/user", router)

//routes for products
app.use( "/api/products", productRoter)


app.get("/" , (req,res)=>{
    res.send("hello backend")
})


connectDB().then(()=>{

    app.listen(PORT, ()=>{
        console.log(`server is running at ${PORT}`); //http://localhost:9000
    })
})