import React from "react";
import RenderedCartItem from "./RenderedCartItem";

export default function RenderedCart({ cart, isCartEmpty }) {
  if (isCartEmpty) {
    return <div>Cart is empty!</div>;
  }
  let cartTotal = 0;

  for (const cartItem of cart) {
    cartTotal += Number(cartItem.price) * Number(cartItem.quantity);
  }
  const renderedCartItem = cart.map((item) => {
    return <RenderedCartItem item={item} key={item.id} />;
  });

  return (
    <div className="flex flex-col gap-8 ">
      <div className="flex flex-col gap-1.5">{renderedCartItem}</div>
      <div className=" flex justify-end gap-1">
        <p>Total: </p>
        <p className="font-bold">${cartTotal.toFixed(2)}</p>
      </div>
    </div>
  );
}
