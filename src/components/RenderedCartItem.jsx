import React, { useContext } from "react";
import { FiTrash2 } from "react-icons/fi";
import { CartContext } from "../contexts/CartContext";

export default function RenderedCartItem({ item }) {
  const { id, name, quantity, price } = item;
  const { incrementQuantity, decrementQuantity, removeItem } =
    useContext(CartContext);

  function handleDecrementClick() {
    if (quantity === 1) {
      removeItem(id);
    } else {
      decrementQuantity(id);
    }
  }

  function handleIncrementClick() {
    incrementQuantity(id);
  }

  return (
    <div className="flex justify-between  items-center">
      <p className=" w-[300px]">
        {name} - {quantity} x ${price}
      </p>
      <div className="flex  gap-3 ">
        <button
          className="bg-black text-white rounded-full text-lg font-bold w-8 h-8"
          onClick={handleDecrementClick}
        >
          {quantity === 1 ? <FiTrash2 className=" w-full" /> : "-"}
        </button>
        <p className=" text-xl w-3 text-center">{quantity}</p>
        <button
          className="bg-black w-8 text-white font-bold rounded-full h-8 "
          onClick={handleIncrementClick}
        >
          +
        </button>
      </div>
    </div>
  );
}
