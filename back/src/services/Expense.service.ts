import { IExpense } from './../interfaces/IExpense';
import { userRepository } from "../repositories/UserRepository";
import { IUser } from '../interfaces/IUser';
import { categoryRepository } from '../repositories/CategoryRepository';
import { ICategory } from '../interfaces/ICategory';
import { expenseRepository } from '../repositories/ExpenseRepository';

export class ExpenseService {

   async newExpense(categoryId: number, amount: number, description: string, date: string, userId: number): Promise<IExpense | { msg: string; code: number }> {
      let newExpense: IExpense;

      if(!categoryId || !amount|| !description || !date) {
         return { msg: "Not received some expense information", code: 400 };
      }

      let loggedUser: IUser = await userRepository.findUserById(userId);
      if(!loggedUser) {
         return { msg: "User not found", code: 404 };
      }

      let category: ICategory = await categoryRepository.findCategoryById(categoryId);
      if(!category) {
         return { msg: "Category not found", code: 404 };
      }

      newExpense = {
         user: loggedUser,
         category: category,
         amount,
         description,
         date: new Date(date),
         createdAt: new Date()
      }

      expenseRepository.saveExpense(newExpense);

      return newExpense;
   }

   async getExpensesByInterval(days: number): Promise<IExpense[] | { msg: string; code: number }> {
      let intervalExpenses: IExpense[] = [];

      if(!days) {
         return { msg: "Not received interval days", code: 400 };
      }

      intervalExpenses = await expenseRepository.findAllByInterval(days);
      if(intervalExpenses) {
         return intervalExpenses;
      } else {
         return { msg: "No expenses found", code: 404 };
      }
   }

   async getExpensesByCategory(categoryId: number): Promise<IExpense[] | { msg: string; code: number }> {
      let intervalExpenses: IExpense[] = [];

      if(!categoryId) {
         return { msg: "Not received category id", code: 400 };
      }

      intervalExpenses = await expenseRepository.findAllByCategory(categoryId);
      if(intervalExpenses) {
         return intervalExpenses;
      } else {
         return { msg: "No expenses found", code: 404 };
      }
   }
}