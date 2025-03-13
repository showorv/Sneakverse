import { Router } from "express";
import { userMiddleware } from "../middleware/User-middleware.js";
import { adminMiddleware } from "../middleware/admin-middleware.js";
import productControllers from "../controllers/productControllers.js";
const {productsCreate, updateProduct, deleteProduct} = productControllers;


const router = Router()

//create products
//access private/admin
router.route("/").post(userMiddleware,adminMiddleware,productsCreate)

//update products
//put /api/products/:id
router.route("/:id").put(userMiddleware,adminMiddleware,updateProduct)

//delete product by id

//delete /api/products/:id

router.route("/:id").delete(userMiddleware,adminMiddleware,deleteProduct)


export default router