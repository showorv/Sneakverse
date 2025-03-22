import { Router } from "express";
import { userMiddleware } from "../middleware/User-middleware.js";
import { adminMiddleware } from "../middleware/admin-middleware.js";
import adminControllers from "../controllers/adminControllers.js"
const {allUsers,addUser,updateUser,deleteUser,allProducts,allOrder,updateOrder,deleteOrder} = adminControllers


const router = Router()

router.route("/users").get(userMiddleware,adminMiddleware,allUsers)

//add user

router.route("/").post(userMiddleware,adminMiddleware,addUser)

// update user by id

router.route("/users/:id").put(userMiddleware,adminMiddleware,updateUser)

// delete user by id
router.route("/users/:id").delete(userMiddleware,adminMiddleware,deleteUser)

// display products

router.route("/produts").get(userMiddleware,adminMiddleware,allProducts)

// display all order

router.route("/orders").get(userMiddleware,adminMiddleware,allOrder)

//order update by id

router.route("/orders/:id").put(userMiddleware,adminMiddleware,updateOrder)

//delete order by id
router.route("/orders/:id").delete(userMiddleware,adminMiddleware,deleteOrder)


export default router;