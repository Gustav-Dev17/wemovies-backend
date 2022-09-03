export type Status = "unwatched" | "watching" | "watched";

export interface IRequestMovieBody {
  status?: Status;
  title?: string;
  description?: string;
  genre?: string;
  duration?: string;
  release_year?: string;
  box_office?: string;
  cast?: string[];
  studio?: string;
  available_on?: string;
  userId?: string;
}

export interface IMovie {
  status: Status;
  title: string;
  description: string;
  genre: string;
  duration: string;
  release_year: string;
  box_office: string;
  cast: string[];
  studio: string;
  available_on: string;
  userId: string;
}
