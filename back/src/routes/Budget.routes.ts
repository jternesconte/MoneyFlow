import { Router } from "express";
import { authenticateToken } from "../middlewares/AuthenticateToken";

export const budgetRoutes = Router();

budgetRoutes.use(authenticateToken);