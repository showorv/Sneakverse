import { Router } from "express";
import { userMiddleware } from "../middleware/User-middleware.js";
import { adminMiddleware } from "../middleware/admin-middleware.js";
import productsCreate from "../controllers/productControllers.js";


const router = Router()

//create products
//access private/admin
router.route("/").post(userMiddleware,adminMiddleware,productsCreate)

export default router