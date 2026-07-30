import { Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken';
import { IAuthRequest } from '../interface/IAuthRequest';

export const authMiddleware = (req: IAuthRequest, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    res.status(401).json({ message: "No token provide" });
    return;
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
}


