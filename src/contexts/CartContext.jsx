import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
  addItem: () => {},
  removeItem: () => {},
  incrementQuantity: () => {},
  decrementQuantity: () => {},
  clearCart: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  function addItem(item) {
    setCart((prev) => {
      return [...prev, item];
    });
  }

  function clearCart() {
    setCart([]);
  }

  function incrementQuantity(id) {
    setCart((prev) => {
      return prev.map((cartItem) => {
        if (cartItem.id === id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });
    });
  }
  function decrementQuantity(id) {
    setCart((prev) => {
      return prev.map((cartItem) => {
        if (cartItem.id === id) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        }
        return cartItem;
      });
    });
  }

  function removeItem(id) {
    setCart((prev) => {
      return prev.filter((cartItem) => cartItem.id !== id);
    });
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        incrementQuantity,
        decrementQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
