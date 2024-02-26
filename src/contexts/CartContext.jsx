import React, { createContext, useEffect, useState } from "react";

// create context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // Cart state
  const [cart, setCart] = useState([]);
  // Item Amont State
  const [itemAmount, setItemAmount] = useState(0);
  // Total Price State
  const [total, setTotal] = useState(0);
  // Dot Value
  const [dot, setDot] = useState([]);

  // total amount
  useEffect(() => {
    const totalAmount = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);

    setTotal(totalAmount);
  }, [cart]);

  // update item Amount
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);

      setItemAmount(amount);
    }
  }, [cart]);

  // Add to Cart
  const addToCart = (product, id) => {
    // // console.log(`${product.title} added to the cart`);
    const newItem = { ...product, amount: 1 };
    // // console.log(newItem);
    // check if the item is already in the cart
    const cartItem = cart.find((item) => item.id === id);

    // If cart item is already in the cart, Else add it in cart
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });

      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
      setDot([...dot, newItem.id]);
    }
  };

  // Remove from Cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);

    const newDot = dot.filter((dotId) => dotId !== id);
    setDot(newDot);

  };

  // Clear Cart
  const clearCart = () => {
    setCart([]);
  };

  // Increase amount
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    // // console.log(cartItem);
    addToCart(cartItem, id);

  };

  // Decrease amount
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    // // console.log(cartItem);
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    
    if (cartItem.amount < 2) {
      removeFromCart(id);
    }
  };
  // // console.log(cart);

  return <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart, increaseAmount, decreaseAmount, itemAmount, total, dot,setDot }}>{children}</CartContext.Provider>
};

export default CartProvider;
