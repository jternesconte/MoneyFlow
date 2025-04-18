import { Request, Response } from 'express';
import { UserService } from '../services/User.service';

export class UserController {

   private userService = new UserService();
   
   newRegister = async (req: Request, res: Response) => {
      const { name, email, password, password2 } = req.body;
  
      const result = await this.userService.registerUser(name, email, password, password2);
      res.status(result.success ? 201 : 400).json(result);
    }

   userLogin = async (req: Request, res: Response) => {
      const { email, password } = req.body;

      const result = await this.userService.userLogin(email, password);
      res.status(result.success ? 201 : 400).json(result);
   }
}