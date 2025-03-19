import { Router } from "express";
import { authenticateToken } from "../middlewares/AuthenticateToken";

export const userRoutes = Router();

/* userRoutes.post('/register', new UserController().newRegister);

userRoutes.post('/login', new UserController().userLogin);

userRoutes.put('/editUser', authenticateToken, new UserController().editUser); */