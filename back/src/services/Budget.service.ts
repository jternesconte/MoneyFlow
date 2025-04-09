import { IBudget } from "../interfaces/IBudget";
import { ICategory } from "../interfaces/ICategory";
import { IUser } from "../interfaces/IUser";
import { budgetRepository } from "../repositories/BudgetRepository";

export class BudgetService {

   async newBudget(category: ICategory, amount: number, month: string, user: IUser): Promise<IBudget | { msg: string; code: number}> {
         let newBudget: IBudget;
   
         if(!category || !amount || !month || !user) {
            return { msg: "Not received some Budget information", code: 400 };
         }
   
         newBudget = {
            category: category,
            amount: amount,
            month: new Date(month),
            user: user,
            createdAt: new Date()
         }
   
         await budgetRepository.saveBudget(newBudget);
         return newBudget;
      }
}