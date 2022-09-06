import * as yup from "yup";

export const userSchema = yup.object().shape({
  name: yup.string().min(5, "Username must be longer than 5 characters!").required("Username is required!"),
  email: yup.string().email().required("Email address is required!"),
  password: yup.string().min(8, "Password must be longer than 8 characters!").required("Password is required!"),
});
