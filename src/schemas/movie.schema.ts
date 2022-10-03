import * as yup from "yup";

const today = new Date();

export const movieSchema = yup.object().shape({
  status: yup.mixed().oneOf(["Unwatched", "Watching", "Watched"]).required("Movie status is required!"),
  title: yup.string().min(1, "Title must be at least 1 character long").required("Movie title is required!"),
  origin: yup.array().of(yup.string()).notRequired(),
  description: yup.string().max(300, "Description cannot be longer than 300 characters").required("Movie description is required!"),
  genre: yup.array().of(yup.string()).notRequired(),
  duration: yup.string().min(2, "Duration year must be at least 2 characters long").notRequired(),
  release_year: yup.string().min(4, "Release year must be at least 4 characters long").notRequired(),
  box_office: yup.string().min(5, "Release year must be at least 5 characters long").notRequired(),
  cast: yup.array().of(yup.string()).notRequired(),
  studio: yup.array().of(yup.string()).notRequired(),
  available_on: yup.array().of(yup.string()).notRequired(),
  watched_on: yup.date().when("status", { is: "Watched", then: yup.date().required("The date you watched is required!") }).max(today),
  userId: yup.string(),
});
