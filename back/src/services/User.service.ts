import { userRepository } from "../repositories/UserRepository";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { IUser } from "../interfaces/IUser";

type JwtPayload ={
   userId: number;
}

export class UserService {

   async registerUser(name: string, email: string, password: string, password2: string): Promise<{ success: boolean; msg?: string; token?: string }> {
      if (!name) {
        return { success: false, msg: "Name field is required" };
      }
  
      if (password !== password2) {
        return { success: false, msg: "Password does not match" };
      }
  
      const existentUser = await userRepository.findOneBy({ email });
      if (existentUser) {
        return { success: false, msg: "Email already registered" };
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser: IUser = { name, email, password: hashedPassword };
  
      await userRepository.saveUser(newUser);
  
      const createdUser = await userRepository.findOneBy({ email: newUser.email });
      if (!createdUser) {
        return { success: false, msg: "Error in User Register" };
      }
  
      const secret = process.env.SECRET_KEY as string;
      const token = jwt.sign({ userId: createdUser.id }, secret, { expiresIn: "7d" });
  
      return { success: true, msg: "User successfully registered", token };
   }

   async userLogin(email: string, password: string): Promise<{ success: boolean; msg?: string; token?: string }> {

      const existentUser = await userRepository.findOneBy({ email: email });
         if(existentUser) {
            const isPasswordMatch: boolean = await bcrypt.compare(password, existentUser.password);

            if(!isPasswordMatch) {
               return { success: false, msg: 'Invalid password!' };
            }

         } else {
            return { success: false, msg: 'Email not registered' };
         }
         
         const secret = process.env.SECRET_KEY as string;

         const token = jwt.sign({ userId: existentUser.id }, secret, {
            expiresIn:'7d'
         });

      return { success: true, msg: "User successfully registered", token };
   }
}