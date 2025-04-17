import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IProduct } from "./Products";

const ProductDetails: React.FC = () => {
  const {id} = useParams();
  const [details, setDetails] = useState<IProduct>();
  const navigate = useNavigate();

  const redirect = () => {
    navigate("/Products");
  }

  useEffect(() => {
    getProductDetails(id);
  }, [id]);

  const getProductDetails = async (id: string | undefined) => {
    const response = await fetch(`http://localhost:8080/products/${id}`);
    const data = await response.json();
    setDetails(data);
  };

  return (
    <>
    <div style={{border: '2px solid', margin: '20px'}}>
      <div className="pd-name">Product Details</div>
      <div><h2>Product Name - {details?.name}</h2></div>
      <div>{details?.desc}</div>
      <div>Product Id - {details?.id}</div>
      <div>Product Qty - {details?.qty}</div>
    </div>
    <button onClick={redirect}>Back</button>
    </>
  );
};

export default ProductDetails;
