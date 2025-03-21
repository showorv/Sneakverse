import Product from "../model/ProductModel.js"
import CartItem from "../model/CartModel.js"
import Checkout from "../model/checkoutModel.js"
import Order from "../model/orderModel.js"

// logedin user order in profie

const myOrders = async(req,res)=>{

   try {
    const orders = await Order.find({
        user: req.user._id
    }).sort({ createdAt: -1})

    res.status(201).json(orders)
   } catch (error) {
    console.error(error);
    res.status(500).json({mssgs:"error in myorder", error:error.message})
   }

}

// order details by id

const orderDetails = async (req,res)=>{

    try {
         const orders = await Order.findById(req.params.id).populate("user", "name email")

         if(!orders){
            return res.status(400).json({mssgs:"order not found"})
         }

         //if has order

         res.status(201).json(orders)

    } catch (error) {
        console.error(error);
    res.status(500).json({mssgs:"error in orderdetails", error:error.message})
    }
}


export default  {myOrders,orderDetails}