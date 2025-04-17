import axios from "axios";
import { Field, Formik, Form, ErrorMessage } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

const handleValidation = yup.object({
  category: yup.string().required("Enter category name").min(2).max(20),
});

const AddCategories: React.FC = () => {
  const navigate = useNavigate();

  const redirect = () => {
    navigate("/Seller");
  };
  const handleSubmit = async (value: any, { resetForm }: any) => {
    try {
      const response = await axios.post("http://localhost:8080/categories", {
        name: value.category,
      });
      console.log(response);
    } catch {
      console.log("Category not added!");
    }
    resetForm();
    alert("Category added!");
  };
  return (
    <>
      <div>
        <h2>AddCategories</h2>
        <button onClick={redirect}>Back</button>
      </div>
      <br />
      <Formik
        initialValues={{ category: "" }}
        onSubmit={handleSubmit}
        validationSchema={handleValidation}
      >
        <Form>
          <label>New Category </label>
          <Field type="text" name="category" />
          <div style={{ color: "red" }}>
            <ErrorMessage name="category" />
          </div>
          <br />
          <button type="submit">Add</button>
        </Form>
      </Formik>
    </>
  );
};

export default AddCategories;
