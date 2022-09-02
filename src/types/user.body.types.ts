export type Role = "user" | "admin";

export interface IRequestUserBody {
    role?: Role;
    name?: string;
    email?: string;
    password?: string;
}

export interface IUser {
    role: Role;
    name: string;
    email: string;
    password: string;
}

export interface ILogin {
    email: string;
    password: string;
}
