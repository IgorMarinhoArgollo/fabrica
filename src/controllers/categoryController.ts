import { Request, Response, NextFunction } from "express";
import categoryService from "../services/categoryService";

const categoryController = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    return res.status(200).json(await categoryService())
  } catch (error) {
    next(error);
  }
}

export default categoryController;