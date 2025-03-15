import mongoose from "mongoose"
import moongose, { mongo } from "mongoose"

// cartItemSchema

const cartItemSchema = new moongose.Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required: true
    },
    name: String,
    image: String,
    price: Number,
    size: String,
    color: String,
    quantity:{
        type: Number,
        default:1
    }
},
{_id:false});


//cart Schema

const cartSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    guestId:{
        type: String
    },

    products: [cartItemSchema],

    totalPrice: {
        type: Number,
        default: 0
    }
},
{timestamps:true})


const CartItem = mongoose.model("CartItem", cartItemSchema)

export default CartItem