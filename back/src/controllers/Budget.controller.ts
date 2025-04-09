import { Request, Response } from 'express';
import { IBudget } from "../interfaces/IBudget";
import { userRepository } from '../repositories/UserRepository';
import { IUser } from '../interfaces/IUser';
import { BudgetService } from '../services/Budget.service';
import { categoryRepository } from '../repositories/CategoryRepository';
import { ICategory } from '../interfaces/ICategory';

export class BudgetController {

      private budgetService = new BudgetService();

   newBudget = async (req: Request, res: Response) => {
         const { categoryId, amount, month } = req.body;

         let user: IUser = {} as IUser;

         if(req.user?.id) {
               user = await userRepository.findUserById(Number(req.user?.id));
         } else {
            res.status(401).json({ msg: "Unauthorized"} );
         }

         let category: ICategory = {} as ICategory;

         if(categoryId) {
               category = await categoryRepository.findCategoryById(Number(categoryId));
         } else {
            res.status(401).json({ msg: "Category not found"} );
         }

         let newBudget: IBudget | { msg: string; code: number} = await this.budgetService.newBudget(category, amount, month, user);
         if("code" in newBudget) {
            res.status(newBudget.code).json({ msg: newBudget.msg })
         } else {
            res.status(200).json(newBudget);
         }
      }
}