import express from "express";
import { CreateUser, DeleteUser, ReadUser, ReadAllUsers, UpdateUser } from "controllers/users.controller";
import { CreateMovie, ReadMovie, ReadMovies, ReadMoviesByUser, UpdateMovie, DeleteMovie } from "controllers/movies.controller";

const route = express.Router();

//user routes
route.post("/user", CreateUser);
route.get("/user/:id", ReadUser);
route.get("/users", ReadAllUsers);
route.patch("/user/:id", UpdateUser);
route.delete("/user/:id", DeleteUser);

//job routes
route.post("/movie", CreateMovie);
route.get("/movie/:id", ReadMovie);
route.get("/movies", ReadMovies); //query example to paginate: ?page=2
route.get("/movies/:id", ReadMoviesByUser); //query example to paginate: ?page=2
route.patch("/movie/:id", UpdateMovie);
route.delete("/movie/:id", DeleteMovie);

export default route;
