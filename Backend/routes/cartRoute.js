import { Router } from "express";
import { userMiddleware } from "../middleware/User-middleware.js";
import CartControllers from "../controllers/CartControllers.js";
const {cartProduct,updateCart,deleteProduct} = CartControllers

const router = Router()

// post route for cart
//access public

router.route("/").post(cartProduct)

// put update cart

router.route("/").put(updateCart)

//delete product

router.route("/").delete(deleteProduct)



export default router