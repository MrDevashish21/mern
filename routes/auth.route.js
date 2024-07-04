import express from "express";
import { getAllUsers } from "../controllers/auth.controller.js";
import { registerUser } from "../controllers/auth.controller.js";

const router=express.Router();

router.route("/getUsers").get(getAllUsers);
router.route("/register").post(registerUser);

export default router;