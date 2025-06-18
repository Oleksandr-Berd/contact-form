import * as Yup from "yup";

export const validationContactSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too short")
    .required("First name is required"),
  lastName: Yup.string().min(2, "Too short").required("Last name is required"),
  email: Yup.string()
    .email("Please enter a valid email address.")
    .required("Email is required"),
  query: Yup.string().required("Please select an option"),
  message: Yup.string().min(2, "Too short").required("Last name is required"),
  contest: Yup.boolean()
    .oneOf([true], "You must accept the contest rules"),
});
