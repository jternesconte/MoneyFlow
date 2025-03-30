import { format } from "date-fns";
import { ICategory } from "../interfaces/ICategory";
import { categoryRepository } from "../repositories/CategoryRepository";

export class CategoryService {

   async newCategory(name: string, description: string): Promise<ICategory | { msg: string; code: number}> {
      let newCategory: ICategory;

      if(!name || !description) {
         return { msg: "Not received some category information", code: 400 };
      }

      newCategory = {
         name: name,
         description:description,
         createdAt: new Date()
      }

      categoryRepository.saveCategory(newCategory);

      return newCategory;
   }
}