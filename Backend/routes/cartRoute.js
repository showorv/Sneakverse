import { Router } from "express";
import { userMiddleware } from "../middleware/User-middleware.js";
import CartControllers from "../controllers/CartControllers.js";
const {cartProduct,updateCart,deleteProduct,displayCart,mergeCart} = CartControllers

const router = Router()

// post route for cart
//access public

router.route("/").post(cartProduct)

// put update cart

router.route("/").put(updateCart)

//delete product

router.route("/").delete(deleteProduct)

//display cart

router.route("/").get(displayCart)

// merge cart. private

router.route("/merge").post(userMiddleware,mergeCart)

export default router