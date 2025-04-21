import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from 'axios';
import { IUser } from "../common/interfaces";
import { handleRegValidation } from "../common/validation";

const Register: React.FC = () => {
   const handleSubmit = async (values: IUser, { resetForm }: any) => {
      const formattedData = {
        fName: values.fName,
        lName: values.lName,
        email: values.email,
        phNo: values.phNo,
        password: values.password,
      };

      try {
        const response = await axios.post(
          "http://localhost:8080/users",
          formattedData
        );
        console.log(response);
        resetForm();
      } catch {
        console.log("Error fetching data! ");
      }
    };

  return (
    <>
      <h2>Register</h2>
      <Formik
        initialValues={{
          fName: "",
          lName: "",
          email: "",
          phNo: null,
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={handleRegValidation}
      >
        <Form className="register">
          <label>First Name</label>
          <Field name="fName" type="text" />
          <div style={{ color: "red" }}>
            <ErrorMessage name="fName" />
          </div>
          <label>Last Name</label>
          <Field name="lName" type="text" />
          <div style={{ color: "red" }}>
            <ErrorMessage name="lName" />
          </div>
          <label>Email</label>
          <Field name="email" type="email" />
          <div style={{ color: "red" }}>
            <ErrorMessage name="email" className="errormsg" />
          </div>
          <label>Phone No.</label>
          <Field name="phNo" type="tel" />
          <div style={{ color: "red" }}>
            <ErrorMessage name="phNo" className="errormsg" />
          </div>
          <label>Password</label>
          <Field name="password" type="password" />
          <div style={{ color: "red" }}>
            <ErrorMessage name="password" className="errormsg" />
          </div>
          <br />
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default Register;
