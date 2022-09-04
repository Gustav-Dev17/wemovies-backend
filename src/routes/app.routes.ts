import express from "express";
import { loginSchema } from "models/auth.model";
import { DoLogin } from "controllers/auth.controller";
import { validateAuthPayload } from "auth/auth.validator";
import { AuthMiddleware } from "middlewares/auth.middleware";
import { CreateUser, DeleteUser, ReadUser, ReadAllUsers, UpdateUser } from "controllers/users.controller";
import { CreateMovie, ReadMovie, ReadMovies, ReadMoviesByUser, UpdateMovie, DeleteMovie } from "controllers/movies.controller";

const route = express.Router();

route.post("/login", validateAuthPayload(loginSchema), DoLogin);

//user routes
route.post("/user", CreateUser);
route.get("/user", AuthMiddleware, ReadUser);
route.get("/users", AuthMiddleware, ReadAllUsers);
route.patch("/user", AuthMiddleware, UpdateUser);
route.delete("/user", AuthMiddleware, DeleteUser);

//movie routes
route.post("/movie", AuthMiddleware, CreateMovie);
route.get("/movie/:id", AuthMiddleware, ReadMovie);
route.get("/movies", AuthMiddleware, ReadMovies); //query example to paginate: ?page=2
route.get("/movies", AuthMiddleware, ReadMoviesByUser); //query example to paginate: ?page=2
route.patch("/movie/:id", AuthMiddleware, UpdateMovie);
route.delete("/movie/:id", AuthMiddleware, DeleteMovie);

export default route;
