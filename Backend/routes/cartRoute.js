import { Router } from "express";
import { userMiddleware } from "../middleware/User-middleware.js";
import CartControllers from "../controllers/CartControllers.js";
const {cartProduct} = CartControllers

const router = Router()

// post route for cart
//access public

router.route("/").post(cartProduct)




export default router