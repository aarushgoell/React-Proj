import { useDispatch, useSelector } from "react-redux";

import { useDispatch } from "react-redux";

import { clearCart } from "../utils/cartSlice";

import ItemList from "./ItemList";

export const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const clearItems = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-1">
      <h1 className="text-2xl font-bold">Cart</h1>

      <button className="bg-black text-white m-3 p-3" onClick={clearItems}>
        Clear Cart
      </button>

      <div className="w-6/12 m-auto">
        <ItemList itemCards={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
