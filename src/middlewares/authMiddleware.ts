import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import AuthPayload from "../interfaces/AuthPayload";
import UserModel from "../models/UserModel";

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }
    try {
      const token = authorization.split(' ');
      const decoded = jwt.verify(token[1], process.env.JWT_SECRET || 'secret') as AuthPayload;
      if (await UserModel.findOne({ email: decoded.email, name: decoded.name })) next();
    } catch (error) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
  } catch (error) {
    next(error);
  }
};

export default authMiddleware;