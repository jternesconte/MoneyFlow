import { AppDataSource } from "../data-source";
import { Budget } from "../entities/Budget";
import { Category } from "../entities/Category";
import { Expense } from "../entities/Expense";
import { IBudget } from "../interfaces/Budget";
import { IExpense } from "../interfaces/Expense";
import { ICategory } from "../interfaces/ICategory";

export const budgetRepository = AppDataSource.getRepository(Budget).extend({

 async saveBudget(data: IBudget): Promise<Budget> {
   const Budget = this.create({
      userId: data.userId,
      categoryId: data.categoryId,
      amount: data.amount,
      description: data.description,
      month: data.month,
      createdAt: new Date().toISOString()
   });

   return this.save(Budget);
 },

 
});