import { Request, Response } from 'express';
import { IExpense } from '../interfaces/IExpense';
import { ExpenseService } from '../services/Expense.service';
import { categoryRepository } from '../repositories/CategoryRepository';
import { expenseRepository } from '../repositories/ExpenseRepository';

export class ExpenseController {

   private expenseService = new ExpenseService();

   newExpense = async (req: Request, res: Response) => {
      const { categoryId, amount, description, date } = req.body;
      let userId: number = 0;

      if(req.user?.id) {
         userId = req.user?.id;
      } else {
         res.status(401).json({ msg: "User id not received" })
      }

      const newExpense: IExpense | { msg: string; code: number } = await this.expenseService.newExpense(categoryId, amount, description, date, userId);
      if("code" in newExpense) {
         res.status(newExpense.code).json({ msg: newExpense.msg })
      } else {
         res.status(200).json(newExpense);
         expenseRepository.saveExpense(newExpense);
      }
   }

   getExpensesByInterval = async (req: Request, res: Response) => {
      const { days } = req.params;

      const intervalExpenses: IExpense[]  | { msg: string; code: number }  = await this.expenseService.getExpensesByInterval(Number(days));
      if("code" in intervalExpenses) {
         res.status(intervalExpenses.code).json({ msg: intervalExpenses.msg })
      } else {
         res.status(200).json(intervalExpenses);
      }
   }

   getExpensesByCategory = async (req: Request, res: Response) => {
      const { categoryId } = req.body;

      const categoryExpenses: IExpense[]  | { msg: string; code: number }  = await this.expenseService.getExpensesByCategory(Number(categoryId));
      if("code" in categoryExpenses) {
         res.status(categoryExpenses.code).json({ msg: categoryExpenses.msg })
      } else {
         res.status(200).json(categoryExpenses);
      }
   }

}