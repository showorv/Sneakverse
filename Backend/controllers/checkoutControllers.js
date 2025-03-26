
import Product from "../model/ProductModel.js"
import CartItem from "../model/CartModel.js"
import Checkout from "../model/checkoutModel.js"
import Order from "../model/orderModel.js"


const createCheckout = async (req,res)=>{

    const { checkoutItems, deliveryAddress, totalPrice, paymentMethod} = req.body

    if(!checkoutItems || checkoutItems.length === 0){
        return res.status(404).json({mssgs:"No items in checkout"})
    }

    try {
        // create new checkout session

        const newCheckout = await Checkout.create({
            user: req.user._id,
            checkoutItems: checkoutItems,
            paymentMethod,
            deliveryAddress,
            totalPrice,
            isPaid: false,
            paymentStatus: "pending"
        })

        // console.log(`checkout for ${req.user._id}`);

        res.status(201).json(newCheckout);
    } catch (error) {
        console.error(error);
        res.status(500).json({mssgs:"error in create checkout", error:error.message})
    }
}

// update checkout to mark as paid after successful payment

const paymentCheckoutStatus = async (req,res)=>{

    const {paymentStatus,paymentDetails} = req.body

    try {
        
        // find checkout by id

        const checkout = await Checkout.findById(req.params.id)

        if(!checkout){
            return res.status(400).json({mssgs:"Checkout not found"})
        }

        if (checkout.isPaid) {
            return res.status(400).json({ message: "Payment has already been processed" });
        }

        if(paymentStatus === "paid"){
            checkout.isPaid = true
            checkout.paymentStatus = paymentStatus
            checkout.paymentDetails = paymentDetails
            checkout.paidAt = Date.now()

            await checkout.save()

            res.status(201).json(checkout)
        }else{
            res.status(400).json({mssgs: "Inavlid payment status"})
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({mssgs:"error in update checkout", error:error.message})
    }
}


// finalize checkout and convert to an order after payment confirmation

const finalizeCheckout = async(req,res)=>{
    try {
        
        const checkout = await Checkout.findById(req.params.id)

        if(!checkout){
            return res.status(400).json({mssgs:"Checkout not found"})
        }

        if(checkout.isPaid && !checkout.isFinalized){

            // create the final order based on checkout details
            const finalOrder = await Order.create({
                user: checkout.user,
                orderItems: checkout.checkoutItems,
                deliveryAddress: checkout.deliveryAddress,
                paymentMethod: checkout.paymentMethod,
                paymentDetails: checkout.paymentDetails,
                totalPrice: checkout.totalPrice,
                isPaid: true,
                paidAt: checkout.paidAt,
                isDelivered: false,
                paymentStatus: "paid"
            })

            // mark checkout as finalized to prevent duplicate

            checkout.isFinalized = true;
            checkout.finalizedDate= Date.now();
            await checkout.save()

            // after finalized the order delete the users cart

            await CartItem.findOneAndDelete({ user: checkout.user})

            res.status(201).json(finalOrder)

        }else if( checkout.isFinalized){
            return res.status(400).json({mssgs:"checkout already finalized"})
        }else{
            return res.status(400).json({mssgs:"checkout isnot paid"})
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({mssgs:"error in finalize checkout", error:error.message})
    }
}

export default {createCheckout, paymentCheckoutStatus, finalizeCheckout}