import mongoose from "mongoose";
import 'dotenv/config'
import Product from "../model/ProductModel.js";
import User from "../model/UserModel.js";
import CartItem from "../model/CartModel.js";
import products from "./product.js";


// connect to mongodb

mongoose.connect(process.env.MONGO_URI);

//function to seed data

const seedData = async () =>{
    try {
        //clear existing data in db

        await Product.deleteMany()
        await User.deleteMany()
        await CartItem.deleteMany()

        // create default admin User

        const createdUser = await User.create({
            name:"Admin user",
            email:"admin@gmail.com",
            password:123456,
            role:"admin",
        });

        //assign default user id to each product

        const userId = createdUser._id;

        const sampleProducts = products.map((product)=>{
            return {...product, user:userId}
        })

        // insert the products into db

        await Product.insertMany(sampleProducts)

        console.log("product data seed successfully");
        process.exit()

    } catch (error) {
        console.error("error in seed", error);
        process.exit(1)
    }
}

seedData()