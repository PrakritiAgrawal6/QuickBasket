import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IProduct } from "../product/Products";
import { removeFromCart } from "../redux/actions/cartAction";

const Cart = () => {

  const dispatch = useDispatch();
const removeFromCart1 = (id: any) => {
  dispatch(removeFromCart(id));
}

  const products = useSelector((state: any) => state?.cart?.cart);
  return (
    <div>
      <h2>Cart products - {products.length}</h2>
      {products.map((product: IProduct) => {
        return(
          <div className="item">
          <div>Product - {product.name} </div>
          <div>key - {product.id}</div>
          <button onClick={() => removeFromCart1(product.id)}>Remove from Cart</button>
          </div>
        )
      })}
    </div>
  );
};

export default Cart;
