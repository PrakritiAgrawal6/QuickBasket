import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IProduct } from "../common/interfaces";

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const [details, setDetails] = useState<IProduct>();
  const navigate = useNavigate();

  const redirect = () => {
    navigate("/Products");
  };

  useEffect(() => {
    getProductDetails(id);
  }, [id]);

  const getProductDetails = async (id: string | undefined) => {
    const response = await fetch(`http://localhost:8080/products/${id}`);
    const data = await response.json();
    setDetails(data);
  };

  return (
    <div className="p-4">
      <div className="border-2 border-gray-300 rounded-lg p-4 mb-4">
        <h2 className="text-2xl font-bold mb-4">Product Details</h2>
        <div className="mb-2">
          <h3 className="text-xl font-semibold">Product Name - {details?.name}</h3>
        </div>
        <div className="text-gray-600 mb-2">{details?.desc}</div>
        <div className="text-gray-600 mb-2">Product Id - {details?.id}</div>
        <div className="text-gray-600 mb-2">Product Qty - {details?.qty}</div>
      </div>
      <button
        onClick={redirect}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Back
      </button>
    </div>
  );
};

export default ProductDetails;
