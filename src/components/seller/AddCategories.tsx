import axios from "axios";
import { Field, Formik, Form, ErrorMessage } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ctghandleValidation } from "../common/validation";

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
    toast("Category added!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Add Categories</h2>
          <button
            onClick={redirect}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Back
          </button>
        </div>
        <Formik
          initialValues={{ category: "" }}
          onSubmit={handleSubmit}
          validationSchema={ctghandleValidation}
        >
          <Form className="space-y-4">
            <div>
              <label className="block text-gray-700">New Category</label>
              <Field
                type="text"
                name="category"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <div className="text-red-500">
                <ErrorMessage name="category" />
              </div>
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Add
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddCategories;
