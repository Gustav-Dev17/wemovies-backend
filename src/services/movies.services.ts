import { IRequestMovieBody, IMovie } from "types/movie.body.types";
import { CreateMoviesRepo, ReadMovies, ReadMovieByID, ReadMoviesByUser, ReadMovieByTitle, UpdateMovie, DeleteMovie } from "repositories/movies.repository";

export const CreateMovieService = async (body: IMovie, id: string) => {
  try {
    const existingMovie = await ReadMovieByTitle(body.title, id);
    if (existingMovie) {
      throw new Error("There is already a movie with this title");
    }
    return CreateMoviesRepo(body);
  } catch (e) {
    throw new Error((e as Error).message);
  }
};

export const ListMovieService = (id: string) => {
  try {
    return ReadMovieByID(id);
  } catch (e) {
    throw new Error((e as Error).message);
  }
};

export const ListMoviesService = (pageNumber: number) => {
  try {
    return ReadMovies(pageNumber);
  } catch (e) {
    throw new Error((e as Error).message);
  }
};

export const ListMoviesByUserService = (id: string, pageNumber: number) => {
  try {
    return ReadMoviesByUser(id, pageNumber);
  } catch (e) {
    throw new Error((e as Error).message);
  }
};

export const UpdateMovieService = async (body: IRequestMovieBody, id: string) => {
  try {
    const movie = await ReadMovieByID(id);
    const status = body.status || movie?.status;
    const title = body.title || movie?.title;
    const origin = body.origin || movie?.origin;
    const description = body.description || movie?.description;
    const genre = body.genre || movie?.genre;
    const duration = body.duration || (movie?.duration as string);
    const release_year = body.release_year || (movie?.release_year as string);
    const box_office = body.box_office || (movie?.box_office as string);
    const cast = body.cast || movie?.cast;
    const studio = body.studio || movie?.studio;
    const available_on = body.available_on || movie?.available_on;
    const watched_on = body.watched_on || (movie?.watched_on as Date);
    return UpdateMovie({ status, title, origin, description, genre, duration, release_year, box_office, cast, studio, available_on, watched_on }, id);
  } catch (e) {
    throw new Error((e as Error).message);
  }
};

export const DeleteMovieService = (id: string) => {
  try {
    return DeleteMovie(id);
  } catch (e) {
    throw new Error((e as Error).message);
  }
};
