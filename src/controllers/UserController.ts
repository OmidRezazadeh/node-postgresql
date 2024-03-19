import { Request, Response, NextFunction } from "express";
import User from "../models/User";
class userController {
  async register (req: Request, res: Response, next: NextFunction) {
    try {
        const hashedPassword = req.body.password;
      const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        status: "active",
        password: hashedPassword
      });
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  };
}
const UserController = new userController();

export { UserController};