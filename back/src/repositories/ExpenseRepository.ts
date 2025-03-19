import { AppDataSource } from "../data-source";
import { Expense } from "../entities/Expense";
import { IExpense } from "../interfaces/Expense";

export const expenseRepository = AppDataSource.getRepository(Expense).extend({

 async saveExpense(data: IExpense): Promise<Expense> {
   const expense = this.create({
      userId: data.userId,
      categoryId: data.categoryId,
      amount: data.amount,
      description: data.description,
      date: data.date,
      createdAt: new Date().toISOString()
   });

   return this.save(expense);
 },

 
});