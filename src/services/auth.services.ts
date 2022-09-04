import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "services/prisma.services";
import { authConf } from "config/auth.config";

export const LoginService = async (email: string, password: string) => {
  try {
    const user = await prisma.users.findFirstOrThrow({ where: { email } });
    if (!user) {
      throw new Error("User does not exist!");
    }
    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) {
      throw new Error("Invalid credentials!");
    }
    const token = jwt.sign({ userId: user.id }, authConf.secret as string, { expiresIn: authConf.expires });
    return token;
  } catch (e) {
    throw new Error((e as Error).message);
  }
};
