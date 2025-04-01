import { Router } from "express";
import { authenticateToken } from "../middlewares/AuthenticateToken";
import { CategoryController } from "../controllers/Category.controller";

export const categoryRoutes = Router();

categoryRoutes.use(authenticateToken);

categoryRoutes.post('/newCategory', new CategoryController().newCategory);

categoryRoutes.get('/getAllCategories', new CategoryController().getCategories);