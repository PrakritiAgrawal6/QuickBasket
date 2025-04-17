import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/actions/cartAction";
export interface IProduct {
  id: string;
  name: string;
  desc: string;
  price: number;
  categoryId: string;
  qty: number;
}
export interface ICategory {
  id: string;
  name: string;
}
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
    <>
      {/*Dropdown part */}
      <h2 >Products Available - {product.length}</h2>
      <div>
        <select value={filteredCtg} onChange={handleFilterChange}>
          <option value="all">All</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      {/*Product display part */}
      <div className="products">
        {FilteredPet.map((product: IProduct) => {
          return (
            <div className="item" key={product.id}>
              <div className="pd-name">Product Name - {product.name}</div>
              <div>Product Id - {product.id}</div>
              <div>Product Qty - {product.qty}</div>
              <button onClick={() => redirect(product?.id)}>
                Product details
              </button>
              <button onClick={() => addToCart1(product)}>Add to Cart</button>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Products;