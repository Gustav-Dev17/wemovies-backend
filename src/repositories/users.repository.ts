import prisma from "services/prisma.services";
import { IUser, IRequestUserBody } from "types/user.body.types";

export const CreateUsersRepo = (body: IUser) => {
  return prisma.users.create({ data: body });
};

export const ReadUserByID = (id: string) => {
  try {
    return prisma.users.findUnique({ where: { id } });
  } catch (e) {
    throw new Error((e as Error).message);
  }
};

export const ReadUsers = () => {
  return prisma.users.findMany();
};

export const UpdateUser = (body: IRequestUserBody, id: string) => {
  try {
    return prisma.users.update({
      where: { id },
      data: body,
    });
  } catch (e) {
    throw new Error((e as Error).message);
  }
};

export const DeleteUser = (id: string) => {
  try {
    return prisma.users.delete({ where: { id } });
  } catch (e) {
    throw new Error((e as Error).message);
  }
};
