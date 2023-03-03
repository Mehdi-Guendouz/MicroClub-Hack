import * as yup from "yup";

const FieldError = "Required Field";

export const NewUser = yup.object().shape({
  FirstName: yup.string().min(5).max(15).trim().required(FieldError),
  LastName: yup.string().min(5).max(15).trim().required(FieldError),
  email: yup.string().trim().email().required(FieldError),
  password: yup.string().min(8).max(20).required(FieldError),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
