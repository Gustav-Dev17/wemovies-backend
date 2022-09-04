import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import { CreateUserService, DeleteUserService, ListUserService, ListUsersService, UpdateUserService } from "services/users.services";

export const CreateUser = async (req: Request, res: Response) => {
  try {
    const user = await CreateUserService(req.body);
    return res.status(201).json(user);
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        return res.status(409).json({ message: "Email address is already being used!" });
      }
    }
    return res.status(400).json({ message: "Error when creating user!", descripton: (e as Error).message });
  }
};

export const ReadUser = async (req: Request, res: Response) => {
  try {
    const { id } = req;
    const user = await ListUserService(id);
    return res.status(200).json(user);
  } catch (e) {
    return res.status(400).json({ message: "Error when listing user!", descripton: (e as Error).message });
  }
};

export const ReadAllUsers = async (__: Request, res: Response) => {
  try {
    const users = await ListUsersService();
    return res.status(200).json(users);
  } catch (e) {
    return res.status(400).json({ message: "Error when listing users!", descripton: (e as Error).message });
  }
};

export const UpdateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req;
    const user = await UpdateUserService(req.body, id);
    return res.status(200).json(user);
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        return res.status(409).json({ message: "Email address is already being used!" });
      }
      if (e.code === "P2023") {
        return res.status(409).json({ message: "Malformed id!" });
      }
      if (e.code === "P2025") {
        return res.status(409).json({ message: "User does not exist!" });
      }
    }
    return res.status(400).json({ message: "Error when updating user!", descripton: (e as Error).message });
  }
};

export const DeleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req;
    const user = await DeleteUserService(id);
    return res.status(204).json(user);
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2023") {
        return res.status(409).json({ message: "Malformed id!" });
      }
      if (e.code === "P2025") {
        return res.status(409).json({ message: "User does not exist!" });
      }
    }
    return res.status(400).json({ message: "Error when deleting user!", descripton: (e as Error).message });
  }
};
