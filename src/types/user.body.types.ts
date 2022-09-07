export type Role = "Admin" | "User";

export interface IRequestUserBody {
  role?: Role;
  name?: string;
  email?: string;
  password?: string;
}

export interface IUser {
  role?: Role;
  name: string;
  email: string;
  password: string;
}
