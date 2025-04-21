import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/actions/cartAction";
import { IProduct } from "../common/interfaces";

const Cart = () => {
  const dispatch = useDispatch();
  const removeFromCart1 = (id: any) => {
    dispatch(removeFromCart(id));
  };

  const products = useSelector((state: any) => state?.cart?.cart);

  // Calculate total cart value
  const totalValue = products.reduce((total: number, product: IProduct) => total + product.price, 0);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Cart products - {products.length}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product: IProduct) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
            <div className="font-semibold text-lg mb-2">Product - {product.name}</div>
            <div className="text-gray-600 mb-2">ID - {product.id}</div>
            <div className="text-gray-600 mb-2">Price - ₹{product.price}</div>
            <button
              onClick={() => removeFromCart1(product.id)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Remove from Cart
            </button>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold">Total Value: ₹{totalValue}</h3>
        <button className="bg-green-500 text-white px-4 py-2 rounded mt-2 hover:bg-green-600">
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
