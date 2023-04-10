import { Request, Response, NextFunction } from "express";
import {getAllService, getByIdService, createService, updateService, deleteService} from "../services/productService";

export const getAllController = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    return res.status(200).json(await getAllService())
  } catch (error) {
    next(error);
  }
}

export const getByIdController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    return res.status(200).json(await getByIdService(id));
  } catch (error) {
    next(error);
  }
}

export const createController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newProduct = req.body;
    const result = await createService(newProduct);
    return res.status(result.code).json({ message: result.message });
  } catch (error) {
    next(error);
  }
}

export const updateController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const productId = req.params.id;
    const updatedProduct = req.body;
    const result = await updateService(updatedProduct, productId);
    return res.status(result.code).json({ message: result.message });
  } catch (error) {
    next(error);
  }
}

export const deleteController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const result = await deleteService(id);
    return res.status(result.code).json({ message: result.message });
  } catch (error) {
    next(error);
  }
}