import * as yup from "yup";

//Register validation
export const handleRegValidation = yup.object({
  fName: yup.string().required("Enter first name").min(4).max(12),
  lName: yup.string().required("Enter last name").min(4).max(12),
  email: yup.string().required("Email required"),
  phNo: yup.string().required("Phone no required").min(2).max(10),
  password: yup.string().required("Enter password").min(2).max(10),
});

//Login validation
export const handleValidation = yup.object({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long"),
  });