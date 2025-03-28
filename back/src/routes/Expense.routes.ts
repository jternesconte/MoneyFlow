import { Router } from "express";
import { authenticateToken } from "../middlewares/AuthenticateToken";
import { ExpenseController } from "../controllers/Expense.controller";

export const expenseRoutes = Router();

expenseRoutes.use(authenticateToken);

expenseRoutes.post('/newExpense', new ExpenseController().newExpense);

expenseRoutes.get('/getExpenses/interval/:days', new ExpenseController().getExpensesByInterval);

expenseRoutes.post('/getExpenses/category', new ExpenseController().getExpensesByCategory);