import { Router } from "express";
import { UserController } from "../controller/UserController";

const router = Router();
const userController = new UserController();

router.post("/api/user/register", userController.signup);
router.post("/api/user/login", userController.login);

export { router };
