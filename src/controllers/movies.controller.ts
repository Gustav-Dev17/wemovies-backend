import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import {
  CreateMovieService,
  ListMovieService,
  ListMoviesService,
  ListMoviesByUserService,
  UpdateMovieService,
  DeleteMovieService,
} from "services/movies.services";

export const CreateMovie = async (req: Request, res: Response) => {
  try {
    const newMovie = await CreateMovieService(req.body);
    return res.status(201).json(newMovie);
  } catch (e) {
    return res.status(400).json({ message: "Error when creating movie!", descripton: (e as Error).message });
  }
};

export const ReadMovie = async (req: Request, res: Response) => {
  try {
    const movie = await ListMovieService(req.params.id);
    return res.status(200).json(movie);
  } catch (e) {
    return res.status(400).json({ message: "Error when listing movie!", descripton: (e as Error).message });
  }
};

export const ReadMovies = async (req: Request, res: Response) => {
  try {
    const pageNumber: number = parseInt(req.query.page as string);
    const movies = await ListMoviesService(pageNumber);
    return res.status(200).json(movies);
  } catch (e) {
    return res.status(400).json({ message: "Error when listing movies!", descripton: (e as Error).message });
  }
};

export const ReadMoviesByUser = async (req: Request, res: Response) => {
  try {
    const pageNumber: number = parseInt(req.query.page as string);
    const movies = await ListMoviesByUserService(req.params.id, pageNumber);
    return res.status(200).json(movies);
  } catch (e) {
    return res.status(400).json({ message: "Error when listing employer's movies!", descripton: (e as Error).message });
  }
};

export const UpdateMovie = async (req: Request, res: Response) => {
  try {
    const movie = await UpdateMovieService(req.body, req.params.id);
    return res.status(200).json(movie);
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2023") {
        return res.status(409).json({ message: "Malformed id!" });
      }
      if (e.code === "P2025") {
        return res.status(409).json({ message: "Movie does not exist!" });
      }
    }
    return res.status(400).json({ message: "Error when updating movie!", descripton: (e as Error).message });
  }
};

export const DeleteMovie = async (req: Request, res: Response) => {
  try {
    await DeleteMovieService(req.params.id);
    return res.status(204).json();
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2023") {
        return res.status(409).json({ message: "Malformed id!" });
      }
      if (e.code === "P2025") {
        return res.status(409).json({ message: "Movie does not exist!" });
      }
    }
    return res.status(400).json({ message: "Error when deleting movie!", descripton: (e as Error).message });
  }
};
