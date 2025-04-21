import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddProducts: React.FC = () => {
  const navigate = useNavigate();

  const redirect = () => {
    navigate("/Seller");
  };

  const handleAdd = async (values: any, { resetForm }: any) => {
    const formattedData = {
      name: values.name,
      desc: values.desc,
      price: values.price || 0,
      categoryId: values.categoryId,
      qty: values.qty || 0,
    };
    try {
      const response = await axios.post(
        "http://localhost:8080/products",
        formattedData
      );
      console.log(response);
      resetForm();
      toast("Product added!");
    } catch {
      console.log("Data not found");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Add Products</h2>
          <button
            onClick={redirect}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Back
          </button>
        </div>
        <Formik
          initialValues={{
            name: "",
            desc: "",
            price: null,
            categoryId: "",
            qty: null,
          }}
          onSubmit={handleAdd}
        >
          <Form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Product Name</label>
              <Field
                type="text"
                name="name"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <div className="text-red-500">
                <ErrorMessage name="name" />
              </div>
            </div>
            <div>
              <label className="block text-gray-700">Description</label>
              <Field
                as="textarea"
                name="desc"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <div className="text-red-500">
                <ErrorMessage name="desc" />
              </div>
            </div>
            <div>
              <label className="block text-gray-700">Price</label>
              <Field
                type="number"
                name="price"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <div className="text-red-500">
                <ErrorMessage name="price" />
              </div>
            </div>
            <div>
              <label className="block text-gray-700">Category ID</label>
              <Field
                type="text"
                name="categoryId"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <div className="text-red-500">
                <ErrorMessage name="categoryId" />
              </div>
            </div>
            <div>
              <label className="block text-gray-700">Quantity</label>
              <Field
                type="number"
                name="qty"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <div className="text-red-500">
                <ErrorMessage name="qty" />
              </div>
            </div>
            <div className="col-span-1 md:col-span-2 flex justify-end">
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Add
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddProducts;
