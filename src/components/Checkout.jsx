import React, { useContext, useEffect, useRef, useState } from "react";
import Modal from "./Modal";
import { CartContext } from "../contexts/CartContext";
import CheckoutForm from "./CheckoutForm";
import axios from "axios";

export default function Checkout({ toggleDisplayCheckout, toggleSuccess }) {
  const checkoutDialogRef = useRef(null);
  const { cart, clearCart } = useContext(CartContext);

  function toggleDialog() {
    const curr = checkoutDialogRef.current;

    if (!curr) return;

    if (curr.hasAttribute("open")) {
      curr.close();
      toggleDisplayCheckout();
    } else {
      curr.showModal();
    }
  }

  async function handleFormSubmit(userInfo) {
    try {
      const data = {
        order: {
          items: cart,
          customer: userInfo,
        },
      };
      const res = await axios.post("http://localhost:3000/orders", data);
    } catch (e) {
      console.log(e.message);
    }
    clearCart();
    toggleSuccess();
    toggleDialog();
  }

  useEffect(() => {
    toggleDialog();
  }, []);

  let cartTotal = 0;

  for (const cartItem of cart) {
    cartTotal += Number(cartItem.price) * Number(cartItem.quantity);
  }
  return (
    <>
      <Modal ref={checkoutDialogRef} toggleDialog={toggleDialog}>
        <div className=" p-6 flex flex-col gap-3">
          <h2 className="text-2xl font-bold">Checkout</h2>
          <p>Total Amount: ${cartTotal}</p>
          <CheckoutForm
            toggleDialog={toggleDialog}
            onSubmit={handleFormSubmit}
          />
        </div>
      </Modal>
    </>
  );
}
