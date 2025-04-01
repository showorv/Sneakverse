import Product from "../model/ProductModel.js";
import CartItem from "../model/CartModel.js";


//function to get a cart by user or guest

const getCart = async (guestId,userId)=>{

    if(userId){
        return await CartItem.findOne({user: userId})
    }else if(guestId){
        return await CartItem.findOne({guestId})|| null
    }
    return null;

    
}

// add a product to the cart for guest or logged in user

const cartProduct = async (req,res)=>{

   
    const {productId, quantity,size,color, guestId,userId} = req.body
   

    try {
        
        const product = await Product.findById(productId);
        if(!product){
            return res.status(404).json({mssgs:"product not found"})
        }

        //determine if the user is loggedin or guest

        let cart = await getCart( guestId,userId)

        // if cart is exist then update it

        if(cart){
            const productIndex = cart.products.findIndex((p)=>
                p.productId.toString() === productId && 
                p.size===size && 
                p.color===color
            )

            if(productIndex > -1){
                //if the product exists then update the quantity
                cart.products[productIndex].quantity+=quantity;
            }else{
                //add new product

                cart.products.push({
                    productId,
                    name: product.name,
                    image: product.images[0].url,
                    price: product.price,
                    size,
                    color,
                    quantity

                })
            }

            // calculate cart total

            cart.totalPrice = cart.products.reduce((acc,item)=> acc+ item.price * item.quantity,0);

            await cart.save()
            res.status(200).json(cart)

        }else{

            //create e new cart for guest or user
           

            const newCart = await CartItem.create({
                
                user: userId ? userId : undefined, 
                guestId:guestId?guestId: "guest_" + new Date().getTime(),
                products:[
                    {
                        productId,
                        name: product.name,
                        image: product.images[0].url,
                        price: product.price,
                        size,
                        color,
                        quantity
                    }
                ],
                totalPrice: product.price * quantity
            })

            return res.status(200).json(newCart)
        }

      
    } catch (error) {
        console.error(error);
        res.status(404).json({mssgs:"error in cart", error:error.message})
    }
}


// update product quantity in the cart for guest or logged in

const updateCart = async (req,res)=>{

    const {productId, quantity,size,color, guestId,userId} = req.body

    try {
        
        let cart = await getCart(guestId,userId)

        if(!cart){
            return res.status(404).json({mssgs:"cart not found"})
        }

        const productIndex = cart.products.findIndex((p)=> 
        p.productId.toString() === productId &&
        p.color === color &&
        p.size === size
        )


        if(productIndex >-1){
            //update quantity

            if( quantity >0){
                cart.products[productIndex]. quantity = quantity;
            }else{
                cart.products.splice( productIndex,1) // to remove the item if quantity is 0
            }

            cart.totalPrice = cart.products.reduce((acc,item)=> acc+ item.price * item.quantity,0);

            await cart.save()
            res.status(200).json(cart)
        }else{
            return res.status(404).json({mssgs: "product not found in cart"})
        }
    } catch (error) {
        console.error(error);
        res.status(404).json({mssgs:"error in update cart", error:error.message})
    }
}


// delete product from cart

const deleteProduct = async (req,res)=>{
    // console.log("🔥 Received DELETE request with:", req.body);
    const {productId, size,color, guestId,userId} = req.body

    try {

        let cart = await getCart(guestId,userId)

        if(!cart){
            return res.status(404).json({mssgs:"cart not found"})
        }

        const productIndex = cart.products.findIndex((p)=> 
        p.productId.toString() === productId &&
        p.color === color &&
        p.size === size
        )


        if(productIndex >-1){
          
          cart.products.splice( productIndex,1) 
            

            cart.totalPrice = cart.products.reduce((acc,item)=> acc + item.price * item.quantity,0);

            await cart.save()
            res.status(200).json(cart)
        }else{
            return res.status(404).json({mssgs: "product not found in cart"})
        }
        
    } catch (error) {
        console.error(error);
        res.status(404).json({mssgs:"error in delete cart", error:error.message})
    }
}


//displaying cart on log or guest user

const displayCart = async(req,res)=>{

    const {guestId, userId} = req.query; //access from url

    if (!guestId && !userId) {
        return res.status(400).json({ error: "guestId or userId required" });
    }

    try {
        const cart =await getCart(guestId,userId)

        if(cart){
            res.status(200).json(cart)
            // console.log("Cart Data:", cart);
        }else{
            res.status(404).json({mssgs:"Cart not found"})
        }
    } catch (error) {
        console.error(error);
        res.status(404).json({mssgs:"error in display cart", error:error.message})
    }
}


// merge functionality->
//merge guest cart into user cart on login


 const mergeCart = async ( req,res)=>{
    
     const {guestId} = req.body

     try {
        // find guest cart and user cart

        const guestCart = await CartItem.findOne({guestId})
        const userCart = await CartItem.findOne({user: req.user._id})

        if(guestCart){
            if(guestCart.products.length === 0){
               return res.status(404).json({mssgs: "Guest cart is empty"})
            }

            if( userCart){
                //merge guest cart into usercart
    
                guestCart.products.forEach((guestItem)=>{
                    const productIndex = userCart.products.findIndex((item)=> 
                    item.productId.toString() === guestItem.productId.toString() &&
                    item.size === guestItem.size &&
                    item.color === guestItem.color
                    )
    
                    if(productIndex > -1){
                        //if item exists then increase the quantity
    
                        userCart.products[productIndex].quantity += guestItem.quantity
                    }else{
                        //otherwise add the item
    
                        userCart.products.push(guestItem)
                    }
                })
    
    
                userCart.totalPrice = userCart.products.reduce((acc,item)=> acc+ item.price * item.quantity , 0)
    
                await userCart.save()
    
    
                //remove guest cart after merging
    
                 try {
                    await CartItem.findOneAndDelete ({guestId})
                 } catch (error) {
                    console.error("error in deleting guestcart",error);
                 }
    
                 res.status(200).json(userCart)
            }else{
                // if the user has no existing cart assign the guest cart to user
                guestCart.user = req.user._id
                guestCart.guestId = undefined
                await guestCart.save()
                res.status(200).json(guestCart)
                
            }
        }else{
            if(userCart){
                //guest cart already merged , return usercart

                return res.status(200).json(userCart)
            }

            res.status(404).json({mssgs:"guest cart not found"})
        }

     
     } catch (error) {
        console.error(error);
        res.status(404).json({mssgs:"error in merge function", error:error.message})
     }

 }





export default {cartProduct, updateCart,deleteProduct,displayCart,mergeCart};