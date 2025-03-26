import { Request, Response } from 'express';
import { ICategory } from '../interfaces/ICategory';
import { CategoryService } from '../services/Category.service';

export class CategoryController {

   private categoryService = new CategoryService();

   async  newCategory(req: Request, res: Response) {
      const { name, description } = req.body;
  
      const newCategory: ICategory | null = await this.categoryService.newCategory(name, description);
      if(newCategory) {
         res.status(200).json(newCategory);
      } else {
         res.status(400).json({ msg: 'Error in Category creation.' })
      }
   }

}