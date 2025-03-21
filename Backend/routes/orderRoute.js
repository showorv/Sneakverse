import {Router} from "express"
import orderControllers from "../controllers/orderControllers.js"
import { userMiddleware } from "../middleware/User-middleware.js";

const {myOrders,orderDetails} = orderControllers;

const router = Router()

// my order for loggedin user
//private

router.route("/myorder").get(userMiddleware,myOrders)

//order details view by id

router.route("/:id").get(userMiddleware,orderDetails)



export default router;