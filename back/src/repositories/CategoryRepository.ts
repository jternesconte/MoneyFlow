import { AppDataSource } from "../data-source";
import { Category } from "../entities/Category";
import { ICategory } from "../interfaces/ICategory";

export const categoryRepository = AppDataSource.getRepository(Category).extend({

  async saveCategory(data: ICategory): Promise<Category> {
    const category = this.create({
      name: data.name,
      description: data.description,
      createdAt: new Date().toISOString()
    });

    return this.save(category);
  },

  async getAllCategories(): Promise<ICategory[]> {
    const categories = await this.find();

    return categories as ICategory[];
  },

  async findCategoryById(categoryId: number): Promise<ICategory> {
    const category = await this.findOneBy({ id: categoryId });

    return category as ICategory;
  },
});