import * as yup from "yup";

export const userSchema = yup.object().shape({
  role: yup.mixed().oneOf(["User", "Admin"]).notRequired(),
  name: yup.string().min(5, "Username must be longer than 5 characters!").required("Username is required!"),
  email: yup.string().email().required("Email address is required!"),
  password: yup.string().min(8, "Password must at least 8 characters long!").required("Password is required!"),
});
