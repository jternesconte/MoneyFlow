import { Request, Response } from 'express';
import { UserService } from '../services/User.service';

export class UserController {

   private userService = new UserService();

   async newRegister(req: Request, res: Response): Promise<void> {
      const { name, email, password, password2 } = req.body;
  
      const result = await this.userService.registerUser(name, email, password, password2);
      res.status(result.success ? 201 : 400).json(result);
    }

   async userLogin(req: Request, res: Response) {
      const { email, password } = req.body;

      const result = await this.userService.userLogin(email, password);
      res.status(result.success ? 201 : 400).json(result);
   }
}