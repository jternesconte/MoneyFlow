import { Request, Response } from 'express';
import { ICategory } from '../interfaces/ICategory';
import { CategoryService } from '../services/Category.service';

export class CategoryController {

   private categoryService = new CategoryService();

   newCategory = async (req: Request, res: Response) => {
      const { name, description } = req.body;
  
      const newCategory: ICategory | { msg: string; code: number} = await this.categoryService.newCategory(name, description);
      if("code" in newCategory) {
         res.status(newCategory.code).json({ msg: newCategory.msg })
      } else {
         res.status(200).json(newCategory);
      }
   }

   getCategories = async (req: Request, res: Response) => { 
      const categories: ICategory[] | { msg: string; code: number} = await this.categoryService.getAllCategories();
      if("code" in categories) {
         res.status(categories.code).json({ msg: categories.msg })
      } else {
         res.status(200).json(categories);
      }
   }

}