import bcrypt from "bcryptjs";
import { IRequestUserBody, IUser } from "types/user.body.types";
import { CreateUsersRepo, ReadUsers, ReadUserByID, UpdateUser, DeleteUser } from "repositories/users.repository";

export const CreateUserService = (body: IUser) => {
  try {
    body.password = bcrypt.hashSync(body.password, 8); //hashing from IUser.password
    return CreateUsersRepo(body);
  } catch (e) {
    throw new Error((e as Error).message);
  }
};

export const ListUserService = (id: string) => {
  try {
    return ReadUserByID(id);
  } catch (e) {
    throw new Error((e as Error).message);
  }
};

export const ListUsersService = () => {
  try {
    return ReadUsers();
  } catch (e) {
    throw new Error((e as Error).message);
  }
};

export const UpdateUserService = async (body: IRequestUserBody, id: string) => {
  try {
    const user = await ReadUserByID(id);
    const name = body.name || user?.name;
    const email = body.email || user?.email;

    const decryptedPassword = body.password || user?.password; //hashing from IRequestUserBody.password

    const password = bcrypt.hashSync(decryptedPassword as string, 8);

    return UpdateUser({ name, email, password }, id);
  } catch (e) {
    throw new Error((e as Error).message);
  }
};

export const DeleteUserService = (id: string) => {
  try {
    return DeleteUser(id);
  } catch (e) {
    throw new Error((e as Error).message);
  }
};
