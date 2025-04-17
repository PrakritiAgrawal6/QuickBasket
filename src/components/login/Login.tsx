import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const handleValidation = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
});

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = async (values: any, { resetForm }: any) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/users?email=${values.email}&password=${values.password}`
      );
      console.log("Response:", response.data);
      if (response.data?.length > 0) {
        navigate("/Products");
      } else {
        console.error("Invalid Login credentials");
        alert("Wrong credentials!");
        resetForm();
      }
    } catch (error) {
      console.error("Login error: ", error);
    }
  };

  return (
    <>
      <h2>Login</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={handleValidation}
        onSubmit={handleLogin}
      >
        {({ isSubmitting }) => (
          <Form className="login" >
            <label>Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />

            <label>Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" className="error" />

            <button type="submit" disabled={isSubmitting}>
              Log In
            </button>

            <p>
              Not an existing user?{" "}
              <button type="button" onClick={() => navigate("/Register")}>
                Register
              </button>
            </p>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default Login;
