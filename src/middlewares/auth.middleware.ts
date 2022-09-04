import { verify } from "jsonwebtoken";
import { authConf } from "config/auth.config";
import { Request, Response, NextFunction } from "express";

interface TokenPayload {
  userId: string;
  email: string;
}

export const AuthMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = verify(token, authConf.secret) as TokenPayload;
    req.id = decoded.userId;
    return next();
  } catch {
    return res.status(400).json({ message: "Invalid token!" });
  }
};
