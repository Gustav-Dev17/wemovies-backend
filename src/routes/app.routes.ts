import express from "express";
import { userSchema } from "schemas/user.schema";
import { loginSchema } from "schemas/auth.schema";
import { DoLogin } from "controllers/auth.controller";
import { validate } from "validators/fields.validator";
import { movieSchema } from "./../schemas/movie.schema";
import { AuthMiddleware } from "middlewares/auth.middleware";
import { CreateUser, DeleteUser, ReadUser, ReadAllUsers, UpdateUser } from "controllers/users.controller";
import { CreateMovie, ReadMovie, ReadMovies, ReadMoviesByUser, UpdateMovie, DeleteMovie } from "controllers/movies.controller";

const route = express.Router();

route.post("/login", validate(loginSchema), DoLogin);

//user routes
route.post("/user", validate(userSchema), CreateUser);
route.get("/user", AuthMiddleware, ReadUser);
route.get("/users", AuthMiddleware, ReadAllUsers);
route.patch("/user", validate(userSchema), AuthMiddleware, UpdateUser);
route.delete("/user", AuthMiddleware, DeleteUser);

//movie routes
route.post("/movie", validate(movieSchema), AuthMiddleware, CreateMovie);
route.get("/movie/:id", AuthMiddleware, ReadMovie);
route.get("/movies", AuthMiddleware, ReadMovies); //query example to paginate: ?page=2
route.get("/user/movies", AuthMiddleware, ReadMoviesByUser); //query example to paginate: ?page=2
route.patch("/movie/:id", validate(movieSchema), AuthMiddleware, UpdateMovie);
route.delete("/movie/:id", AuthMiddleware, DeleteMovie);

export default route;
