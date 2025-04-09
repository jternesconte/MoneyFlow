import { Router } from "express";
import { authenticateToken } from "../middlewares/AuthenticateToken";
import { BudgetController } from "../controllers/Budget.controller";

export const budgetRoutes = Router();

budgetRoutes.use(authenticateToken);

budgetRoutes.post('/newBudget', new BudgetController().newBudget);