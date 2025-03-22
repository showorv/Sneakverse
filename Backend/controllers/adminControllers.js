import User from "../model/UserModel.js";
import Product from "../model/ProductModel.js";
import Order from "../model/orderModel.js";


//get all users


const allUsers = async(req,res)=>{

    try {
        
        const users = await User.find({})
        res.status(201).json(users)
    } catch (error) {
        console.error(error);
        res.status(500).json({mssgs:"error in all user", error:error.message})
    }

}

// add a new user for admin 

const addUser = async(req,res)=>{
    const {name,email,password,role} = req.body
    try {
      
        let user = await User.findOne({email})

        if(user){
            return res.status(400).json({mssgs:"user already exists"})
        }

        user = new User({
            name,
            email,
            password,
            role: role || "customer"
        })

        await user.save()
        res.status(201).json(user)

    } catch (error) {
        console.error(error);
        res.status(500).json({mssgs:"error in add user", error:error.message})
    }


}

//update user information by id


const updateUser = async (req,res)=>{

    try {
        
        const user = await User.findById(req.params.id)
        if(user){

            user.name = req.body.name || user.name
            user.email = req.body.email || user.email
            user.role = req.body.role || user.role
        }

        const updatedUser = await user.save()
        res.status(201).json(updatedUser)
    } catch (error) {
        console.error(error);
        res.status(500).json({mssgs:"error in updated user", error:error.message})
    }

}

const deleteUser = async (req,res)=>{

    try {
        
        const user = await User.findByIdAndDelete(req.params.id)
        res.status(200).json({mssgs:"user deleted",user})
    } catch (error) {
        console.error(error);
        res.status(500).json({mssgs:"error in delete user", error:error.message})
    }

}


// display all products 

const allProducts = async(req,res)=>{

    try {
        const products = await Product.find({})
        res.status(201).json(products)
    } catch (error) {
        console.error(error);
        res.status(500).json({mssgs:"error in products", error:error.message})
    }

}

// get all order details

const allOrder = async (req,res)=>{

    try {
        const orders = await Order.find({}).populate("user", "name email");
        res.status(201).json(orders)
    } catch (error) {
        console.error(error);
        res.status(500).json({mssgs:"error in orders", error:error.message})
    }
}


// update order status by id

const updateOrder = async (req,res)=>{

    try {
        const order = await Order.findById(req.params.id)

        if(order){

            order.status = req.body.status || order.status;
            order.isDelivered = req.body.status === "Delivered" ? true : order.isDelivered;
            order.deliveredAt = req.body.status === "Delivered"? Date.now() : order.deliveredAt;

            const updatedOrder = await order.save()
            res.status(201).json(updatedOrder)
        }else{
            res.status(400).json({mssgs:"order not found"})
        }

      
    } catch (error) {
        console.error(error);
        res.status(500).json({mssgs:"error in update orders", error:error.message})
    }
}


// delete an order

const deleteOrder = async(req,res)=>{

    try {
        
        const order = await Order.findByIdAndDelete(req.params.id)
        res.status(200).json({mssgs:"user deleted",order})
    } catch (error) {
        console.error(error);
        res.status(500).json({mssgs:"error in delete order", error:error.message})
    }
}

export default {allUsers,addUser,updateUser,deleteUser,allProducts,allOrder,updateOrder,deleteOrder}