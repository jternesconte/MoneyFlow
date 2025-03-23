import { ICategory } from "./ICategory";
import { IUser } from "./IUser";

export interface IBudget {
   id?: number;
   userId: IUser;
   categoryId: ICategory;
   amount: number;
   description: string;
   month: Date;
   createdAt: Date;
   updatedAt?: Date;
}