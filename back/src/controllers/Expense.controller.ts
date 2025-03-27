import { Request, Response } from 'express';
import { IExpense } from '../interfaces/IExpense';
import { ExpenseService } from '../services/Expense.service';

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
      }
   }

}