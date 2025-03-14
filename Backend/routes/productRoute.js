import { Router } from "express";
import { userMiddleware } from "../middleware/User-middleware.js";
import { adminMiddleware } from "../middleware/admin-middleware.js";
import productControllers from "../controllers/productControllers.js";
const {productsCreate, updateProduct, deleteProduct,allProducts,singleProduct} = productControllers;


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

// all products with filter
//public

router.route("/").get(allProducts)

//single product by id

router.route("/:id").get(singleProduct)


export default router