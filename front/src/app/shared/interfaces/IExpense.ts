import { ICategory } from "./ICategory";
import { IUser } from "./IUser";

export interface IExpense {
  id?: number;
  user: IUser;
  category: ICategory;
  amount: number;
  description: string;
  date: Date;
  createdAt?: Date;
  updatedAt?: Date;
  isFixed?: boolean;
  recurrenceInterval?: string;
}