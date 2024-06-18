import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";

export default function Item({ item }) {
  const { cart, addItem } = useContext(CartContext);

  let added = false;

  for (const cartItem of cart) {
    if (cartItem.id === item.id) {
      added = true;
      break;
    }
  }

  function handleClick() {
    addItem({ ...item, quantity: 1 });
  }

  return (
    <div
      id="meal-item"
      className="flex rounded-xl overflow-hidden flex-col items-center   w-[390px]"
    >
      <img src={item.image} alt="" />
      <div className="flex flex-col items-center gap-4 p-5 pb-8">
        <h2 className="font-bold text-xl">{item.name}</h2>
        <p id="meal-item-price" className="px-6 py-1.5 rounded font-bold">
          ${item.price}
        </p>
        <p className="  h-[90px] text-center">{item.description}</p>
        <button
          disabled={added}
          onClick={handleClick}
          className=" px-2 py-1.5 rounded w-[180px] font-bold"
        >
          {added ? "Added to Cart" : "+ Add to Cart"}
        </button>
      </div>
    </div>
  );
}
