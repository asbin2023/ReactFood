import React, { useContext, useRef } from "react";
import { CartContext } from "../contexts/CartContext.jsx";
import Modal from "./Modal";
import RenderedCart from "./RenderedCart";

export default function Cart({ toggleDisplayCheckout }) {
  const cartDialogRef = useRef(null);
  const { cart } = useContext(CartContext);

  function toggleDialog() {
    const curr = cartDialogRef.current;

    if (!curr) return;

    if (curr.hasAttribute("open")) {
      curr.close();
    } else {
      curr.showModal();
    }
  }

  function handleCheckoutClick() {
    toggleDialog();
    toggleDisplayCheckout();
  }

  let isCartEmpty = cart.length === 0;

  return (
    <div>
      <button id="cart" className="font-bold text-lg" onClick={toggleDialog}>
        Cart ({cart.length})
      </button>
      <Modal toggleDialog={toggleDialog} ref={cartDialogRef}>
        <div className=" p-6 flex flex-col gap-3 ">
          <h2 className="font-bold text-2xl">Your Cart</h2>
          <RenderedCart cart={cart} isCartEmpty={isCartEmpty} />

          <div className="flex justify-end gap-4 mt-5 ">
            <button
              className="border-b border-transparent hover:border-b hover:border-black"
              onClick={toggleDialog}
            >
              Close
            </button>
            {!isCartEmpty && (
              <button
                id="checkout"
                onClick={handleCheckoutClick}
                className="py-1.5 px-2.5"
              >
                Go to Checkout
              </button>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
}
