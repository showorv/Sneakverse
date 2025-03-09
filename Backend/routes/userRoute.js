import { Router } from "express";
import userControllers from "../controllers/userContollers.js"
const {register} = userControllers;

const router = Router()

router.route("/register").post(register)

export default router;