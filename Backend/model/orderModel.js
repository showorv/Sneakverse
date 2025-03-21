import mongoose from "mongoose";

const orderitemSchema = new mongoose.Schema({

    productId :{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },

    name: {
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },

    price:{
        type:Number,
        required: true
    },
    size: String,
    color: String,
    quantity:{
        type: Number,
        required: true
    }
},
{_id: false})


const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true
    },

    orderItems: [orderitemSchema],
    deliveryAddress: {
        address: {
            type: String,
            required: true
        },
        city:{ 
            type: String,
            required: true
        }
    },
    paymentMethod: {
        type: String,
         required: true
    },

    totalPrice:{
        type: Number,
            required: true
    },

    

    isPaid:{
        type: Boolean,
        default: false
    },
    paidAt: {
        type: Date
    },

    isDelivered: {
        type: Boolean,
        default:false
    },
    deliveredAt: {
        type: Date
    },
    paymentStatus:{
        type: String,
        enum: ["pending", "paid", "failed"],
        default: "pending"
    },

    status:{
        type: String,
        enum: ["Processing", "Delivered", "Cancelled"],
        default: "Processing"
    }
}, {timestamps:true})


const Order = mongoose.model("Order", orderSchema)
export default Order;