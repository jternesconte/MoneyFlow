import { Router } from "express";
import { authenticateToken } from "../middlewares/AuthenticateToken";

export const categoryRoutes = Router();

categoryRoutes.use(authenticateToken);