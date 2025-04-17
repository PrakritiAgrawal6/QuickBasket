import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
      alert("Product added!");
    } catch {
      console.log("Data not found");
    }
  };

  return (
    <>
      <div>
        <h2>AddProducts</h2>
        <button onClick={redirect}>Back</button>
      </div>
      <br />
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
        <Form className="addProduct">
          <label>Product Name</label>
          <Field type="text" name="name" />
          <div style={{ color: "red" }}>
            <ErrorMessage name="name" />
          </div>
          <label>Description</label>
          <Field type="textarea" name="desc" />
          <div style={{ color: "red" }}>
            <ErrorMessage name="desc" />
          </div>
          <label>Price</label>
          <Field type="number" name="price" />
          <div style={{ color: "red" }}>
            <ErrorMessage name="price" />
          </div>
          <label>categoryId</label>
          <Field type="categoryId" name="categoryId" />
          <div style={{ color: "red" }}>
            <ErrorMessage name="categoryId" />
          </div>
          <label>Quantity</label>
          <Field type="number" name="qty" />
          <div style={{ color: "red" }}>
            <ErrorMessage name="qty" />
          </div>
          <br />
          <button type="submit">Add</button>
        </Form>
      </Formik>
    </>
  );
};

export default AddProducts;
