import { Router } from "express";
import userControllers from "../controllers/userContollers.js"
import { userMiddleware } from "../middleware/User-middleware.js";
const {register,login,user} = userControllers;

const router = Router()

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/user").get(userMiddleware,user)

export default router;