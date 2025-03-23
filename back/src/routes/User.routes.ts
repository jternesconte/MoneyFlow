import { Router } from "express";
import { authenticateToken } from "../middlewares/AuthenticateToken";
import { UserController } from "../controllers/User.controller";

export const userRoutes = Router();

userRoutes.post('/register', new UserController().newRegister);

userRoutes.post('/login', new UserController().userLogin);

userRoutes.put('/editUser', authenticateToken, new UserController().editUser);