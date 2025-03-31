import { Request, Response } from 'express';
import { ICategory } from '../interfaces/ICategory';
import { CategoryService } from '../services/Category.service';
import { categoryRepository } from '../repositories/CategoryRepository';

export class CategoryController {

   private categoryService = new CategoryService();

   newCategory = async (req: Request, res: Response) => {
      const { name, description } = req.body;
  
      const newCategory: ICategory | { msg: string; code: number} = await this.categoryService.newCategory(name, description);
      if("code" in newCategory) {
         res.status(newCategory.code).json({ msg: newCategory.msg })
      } else {
         await categoryRepository.saveCategory(newCategory);
         res.status(200).json(newCategory);
      }
   }

}