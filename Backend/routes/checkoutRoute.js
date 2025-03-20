import { Router } from "express";
import { userMiddleware } from "../middleware/User-middleware.js";
import checkoutControllers from "../controllers/checkoutControllers.js";
const {createCheckout,paymentCheckoutStatus, finalizeCheckout}=checkoutControllers

const router = Router()

// create checkout, private
router.route("/").post(userMiddleware,createCheckout)

// payment status update after payment

router.route("/:id/pay").put(userMiddleware,paymentCheckoutStatus)

// finalize checkout to convert in order after payment

router.route("/:id/finalize").post( userMiddleware, finalizeCheckout)


export default router
