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
                    Image: product.images,
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


export default {cartProduct};