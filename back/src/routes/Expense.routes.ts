import { Router } from "express";
import { authenticateToken } from "../middlewares/AuthenticateToken";

export const expenseRoutes = Router();

expenseRoutes.use(authenticateToken);