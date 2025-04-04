import  express  from "express";
import cors from "cors";
import 'dotenv/config'
import connectDB from "./config/db.js";
import router from "./routes/userRoute.js";
import productRoter from "./routes/productRoute.js"
import cartRouter from "./routes/cartRoute.js"
import checkoutRouter from "./routes/checkoutRoute.js"
import orderRouter from "./routes/orderRoute.js"
import uploadRouter from "./routes/uploadRoute.js"
import adminRoute from "./routes/adminRoute.js"
const app = express()

// const corsOptions = {
//     origin: 'http://localhost:5173',
//     methods: " POST, GET, DELETE, PATCH,PUT, HEAD",
//     credentials: true
// }

app.use(cors())

// use json before router for handle json data in req body
app.use(express.json())



const PORT = process.env.PORT || 9000;


//routes for user

app.use( "/api/user", router)

//routes for products
app.use( "/api/products", productRoter)

//routes for cart

app.use("/api/cart",cartRouter)

// routes for checkout

app.use("/api/checkout",checkoutRouter)

// routes for order

app.use("/api/order",orderRouter)

/// image upload of cloudinary

app.use("/api/upload", uploadRouter)

// admin route

app.use("/api/admin",adminRoute)

app.get("/" , (req,res)=>{
    res.send("hello backend")
})


connectDB().then(()=>{

    app.listen(PORT, ()=>{
        console.log(`server is running at ${PORT}`); //http://localhost:9000
    })
})