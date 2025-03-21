import mongoose, { mongo } from "mongoose";

const checkoutItemSchema = new mongoose.Schema({
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
    quantity:{
        type: Number,
        required: true
    }
},
{_id: false}
)

const checkoutSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true
    },

    checkoutItems: [checkoutItemSchema],
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

    paymentStatus:{
        type: String,
        enum: ["pending", "paid", "failed"],
        default: "pending"
    },

    paymentDetails:{
        type: mongoose.Schema.Types.Mixed 
        
        //It’s useful when the structure of paymentDetails is not fixed (varies for different payment methods like bKash, PayPal, etc.). //if pay in bkash then response {
            // "paymentID": "TRX123456",
            // "payerReference": "017xxxxxxxx",
            // "transactionStatus": "Completed",
            // "amount": 500
        // }
    },

    isFinalized: {
        type: Boolean,
        default: false
    },
    finalizedDate: {
        type: Date
    },

}, {timestamps: true})


const Checkout = mongoose.model("Checkout", checkoutSchema)

export default Checkout;