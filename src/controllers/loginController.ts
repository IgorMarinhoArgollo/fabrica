import { Request, Response, NextFunction } from "express";
import loginService from "../services/loginService";


const loginController = async (req: Request, res: Response, next: NextFunction) => {
 try {
    const { email, password } = req.body;
    const result = await loginService(email, password);
    if (!result.code) {
      return res.status(200).json(result.token);
    }
    return res.status(result.code).json({ message: result.message });
  } catch (error) {
    next(error);
  }
};

export default loginController;