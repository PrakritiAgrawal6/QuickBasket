import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/actions/cartAction";
import { IProduct, ICategory } from "../common/interfaces";

const Products: React.FC = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState<Array<IProduct>>([]);
  const [categories, setCategories] = useState<Array<ICategory>>([]);
  const [filteredCtg, setFilteredCtg] = useState<string>("all");
  const [FilteredPet, setFilteredPet] = useState<Array<IProduct>>([]);

  const redirect = (id: string) => {
    console.log("redirect working!");
    navigate(`/product/${id}`);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const getProducts = async () => {
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    console.log(data);
    setProduct(data);
    setFilteredPet(data);
  };

  const getCategories = async () => {
    const response = await fetch("http://localhost:8080/categories");
    const data = await response.json();
    console.log(data);
    setCategories(data);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const categoryId = e.target.value;
    setFilteredCtg(categoryId);
    if (categoryId === "all") {
      setFilteredPet(product);
    } else {
      const filtered = product.filter((p) => p.categoryId === categoryId);
      setFilteredPet(filtered);
    }
  };

  const addToCart1 = (product: IProduct) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="p-4">
      {/* Dropdown part */}
      <h2 className="text-2xl font-bold mb-4">Products Available - {product.length}</h2>
      <div className="mb-4">
        <select
          value={filteredCtg}
          onChange={handleFilterChange}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="all">All</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      {/* Product display part */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {FilteredPet.map((product: IProduct) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
            <div className="font-semibold text-lg mb-2">{product.name}</div>
            <div className="text-gray-600 mb-2">Product Id - {product.id}</div>
            <div className="text-gray-600 mb-2">Product Qty - {product.qty}</div>
            <button
              onClick={() => redirect(product?.id)}
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600"
            >
              Details
            </button>
            <button
              onClick={() => addToCart1(product)}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;