import { ICategory } from "./ICategory";
import { IUser } from "./IUser";

export interface IExpense {
   id?: number;
   userId: IUser;
   categoryId: ICategory;
   amount: number;
   description: string;
   date: Date;
   createdAt: Date;
   updatedAt?: Date;
}