import { Between } from "typeorm";
import { AppDataSource } from "../data-source";
import { Expense } from "../entities/Expense";
import { IExpense } from "../interfaces/IExpense";

export const expenseRepository = AppDataSource.getRepository(Expense).extend({

 async saveExpense(data: IExpense): Promise<Expense> {
   const expense = this.create({
      user: data.user,
      category: data.category,
      amount: data.amount,
      description: data.description,
      date: data.date,
      createdAt: new Date().toISOString()
   });

   return this.save(expense);
 },

 async findAllByInterval(days: number): Promise<IExpense[]> {
   const startDate = new Date();
  const finalDate = new Date();
  startDate.setDate(finalDate.getDate() - days);
  
    const expenses = await this.find({
      where: {
        date: Between(startDate, finalDate)
      },
      relations: ["category", "user"],
    });

    return expenses as IExpense[];
  },

  async findAllByCategory(categoryId: number): Promise<IExpense[]> {
     const expenses = await this.find({
        where: {
          category: { id: categoryId }
        },
        relations: ["category", "user"],
     });
 
     return expenses as IExpense[];
   },

 
});