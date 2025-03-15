import { Router } from "express";
import { userMiddleware } from "../middleware/User-middleware.js";
import { adminMiddleware } from "../middleware/admin-middleware.js";
import productControllers from "../controllers/productControllers.js";
const {productsCreate, updateProduct, deleteProduct,allProducts,singleProduct, similarProduct,bestSellerProduct} = productControllers;


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

//bestseller product 
//best seller product should not work after single product because of id

router.route("/best-seller").get(bestSellerProduct)

//single product by id

router.route("/:id").get(singleProduct)

// similar product with id

router.route("/similar/:id").get(similarProduct)




export default router