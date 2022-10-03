export type Status = "Unwatched" | "Watching" | "Watched";

export interface IRequestMovieBody {
  status?: Status;
  title?: string;
  origin?: string[];
  description?: string;
  genre?: string[];
  duration?: string;
  release_year?: string;
  box_office?: string;
  cast?: string[];
  studio?: string[];
  available_on?: string[];
  watched_on?: Date;
  userId?: string;
}

export interface IMovie {
  status: Status;
  title: string;
  origin?: string[];
  description: string;
  genre?: string[];
  duration?: string;
  release_year?: string;
  box_office?: string;
  cast?: string[];
  studio?: string[];
  available_on?: string[];
  watched_on?: Date;
  userId: string;
}

export interface IMovieFields {
  status: Status;
  title: string;
  origin?: string[];
  description: string;
  genre?: string[];
  duration?: string;
  release_year?: string;
  box_office?: string;
  cast?: string[];
  studio?: string[];
  available_on?: string[];
  watched_on?: Date;
  userId?: string;
}
