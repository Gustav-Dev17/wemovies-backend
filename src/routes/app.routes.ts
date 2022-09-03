import express from "express";
import { CreateUser, DeleteUser, ReadUser, ReadAllUsers, UpdateUser } from "controllers/users.controller";

const route = express.Router();

//user routes
route.post("/user", CreateUser);
route.get("/user/:id", ReadUser);
route.get("/users", ReadAllUsers);
route.patch("/user/:id", UpdateUser);
route.delete("/user/:id", DeleteUser);

export default route;
