import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import { CreateMovieService, ListMovieService, ListMoviesService, ListMoviesByUserService, UpdateMovieService, DeleteMovieService } from "services/movies.services";

export const CreateJob = async (req: Request, res: Response) => {
  try {
    const job = await CreateMovieService(req.body);
    return res.status(201).json(job);
  } catch (e) {
    return res.status(400).json({ message: "Error when creating job!", descripton: (e as Error).message });
  }
};

export const ReadJob = async (req: Request, res: Response) => {
  try {
    const job = await ListMovieService(req.params.id);
    return res.status(200).json(job);
  } catch (e) {
    return res.status(400).json({ message: "Error when listing job!", descripton: (e as Error).message });
  }
};

export const ReadJobs = async (req: Request, res: Response) => {
  try {
    const pageNumber: number = parseInt(req.query.page as string);
    const jobs = await ListMoviesService(pageNumber);
    return res.status(200).json(jobs);
  } catch (e) {
    return res.status(400).json({ message: "Error when listing jobs!", descripton: (e as Error).message });
  }
};

export const ReadJobsOfAnEmployer = async (req: Request, res: Response) => {
  try {
    const pageNumber: number = parseInt(req.query.page as string);
    const jobs = await ListMoviesByUserService(req.params.id, pageNumber);
    return res.status(200).json(jobs);
  } catch (e) {
    return res.status(400).json({ message: "Error when listing employer's jobs!", descripton: (e as Error).message });
  }
};

export const UpdateJob = async (req: Request, res: Response) => {
  try {
    const job = await UpdateMovieService(req.body, req.params.id);
    return res.status(200).json(job);
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2023") {
        return res.status(409).json({ message: "Malformed id!" });
      }
      if (e.code === "P2025") {
        return res.status(409).json({ message: "Job does not exist!" });
      }
    }
    return res.status(400).json({ message: "Error when updating job!", descripton: (e as Error).message });
  }
};

export const DeleteJob = async (req: Request, res: Response) => {
  try {
    await DeleteMovieService(req.params.id);
    return res.status(204).json();
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2023") {
        return res.status(409).json({ message: "Malformed id!" });
      }
      if (e.code === "P2025") {
        return res.status(409).json({ message: "Job does not exist!" });
      }
    }
    return res.status(400).json({ message: "Error when deleting job!", descripton: (e as Error).message });
  }
};
