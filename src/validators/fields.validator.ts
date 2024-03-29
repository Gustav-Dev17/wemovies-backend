import { SchemaOf } from "yup";
import { IUser } from "types/user.body.types";
import { ILogin } from "types/login.body.types";
import { IMovieFields } from "types/movie.body.types";
import { NextFunction, Request, Response } from "express";

export const validate = (schema: SchemaOf<ILogin | IUser | IMovieFields>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      await schema.validate(data, {
        stripUnknown: true,
        abortEarly: false,
      });
      return next();
    } catch (e: any) {
      return res.status(400).json({ error: e.errors });
    }
  };
};
