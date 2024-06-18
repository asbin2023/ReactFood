import React, { useState } from "react";
import Cart from "./Cart";
import logo from "../assets/logo.jpg";
import Checkout from "./Checkout";
import Success from "./Success";

export default function Header() {
  const [displayCheckout, setDisplayCheckout] = useState(false);
  const [displaySuccess, setDisplaySuccess] = useState(false);

  function toggleDisplayCheckout() {
    setDisplayCheckout((prev) => !prev);
  }
  function toggleSuccess() {
    setDisplaySuccess((prev) => !prev);
  }

  return (
    <header className="w-full flex items-center justify-between pt-7 px-[5%]">
      <div className="flex items-center gap-2">
        <img
          className="w-20 border-2 rounded-full p-1 bg-black"
          src={logo}
          alt=""
        />
        <h1 className="text-3xl font-bold tracking-widest ">REACTFOOD</h1>
      </div>
      <Cart toggleDisplayCheckout={toggleDisplayCheckout} />
      {displayCheckout && (
        <Checkout
          toggleDisplayCheckout={toggleDisplayCheckout}
          toggleSuccess={toggleSuccess}
        />
      )}
      {displaySuccess && <Success toggleSuccess={toggleSuccess} />}
    </header>
  );
}
