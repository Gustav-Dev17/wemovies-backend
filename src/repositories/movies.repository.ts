import prisma from "services/prisma.services";
import { PgConfig } from "config/pagination.config";
import { IMovie, IRequestMovieBody } from "types/movie.body.types";

export const CreateMoviesRepo = (body: IMovie) => {
  return prisma.movies.create({ data: body });
};

export const ReadMovieByID = (id: string) => {
  try {
    return prisma.movies.findUnique({ where: { id } });
  } catch (e) {
    throw new Error((e as Error).message);
  }
};

export const ReadMovies = (pageNumber: number) => {
  if (pageNumber) {
    return prisma.movies.findMany({
      take: PgConfig.perPage,
      skip: PgConfig.perPage * pageNumber,
    });
  } else {
    return prisma.movies.findMany();
  }
};

export const ReadMoviesByUser = (userId: string, pageNumber: number) => {
  if (pageNumber) {
    return prisma.movies.findMany({
      take: PgConfig.perPage,
      skip: PgConfig.perPage * pageNumber,
      where: { userId },
      orderBy: { title: "asc" },
    });
  } else {
    return prisma.movies.findMany();
  }
};

export const UpdateMovie = (body: IRequestMovieBody, id: string) => {
  try {
    return prisma.movies.update({
      where: { id },
      data: body,
    });
  } catch (e) {
    throw new Error((e as Error).message);
  }
};

export const DeleteMovie = (id: string) => {
  try {
    return prisma.movies.delete({ where: { id } });
  } catch (e) {
    throw new Error((e as Error).message);
  }
};
