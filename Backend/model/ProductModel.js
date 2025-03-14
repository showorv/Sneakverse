import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true,
    
    },
    price:{
        type: Number,
        required: true,
    
    },
    discountPrice:{
        type: Number,
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0
    },
    category:{
        type: String,
        required: true
    },
    brand:{
        type: String,
    },
    sizes:{
        type: [String],
        required: true
    },
    colors:{
        type: [String],
        required: true
    },
    collections:{
        type: [String],
        required: true
    },
    images:[
        {
            url: {
                type: String,
                required: true
            },
            alText:{
                type: String
            }
        }
    ],

    isFeatured: {
        type: Boolean,
        default: false
    },
    isPublished: {
        type: Boolean,
        default: false
    },

    rating:{
        type: Number,
        default:0
    },
    numReviews:{
        type: Number,
        default:0
    },

    tags: [String],

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    metaTittle:{
        type: String,
    },
    metaDescription:{
        type: String,
    },
    metaKeywords:{
        type: String,
    },

    dimensions:{
        length:Number,
        width: Number,
        height: Number
    },
    sku:{
        type: String,
        unique:true
    }
    
},
{timestamps: true})



const Product = mongoose.model("Product", productSchema)

export default Product