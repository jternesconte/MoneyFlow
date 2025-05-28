import { ICategory } from "./ICategory";
import { IUser } from "./IUser";

export interface IBudget {
  id?: number;
  user: IUser;
  category: ICategory;
  amount: number;
  month: Date;
  createdAt?: Date;
  updatedAt?: Date;
}