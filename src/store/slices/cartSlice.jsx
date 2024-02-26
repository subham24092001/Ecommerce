import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  itemAmount: 0,
  total: 0,
  dot: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      // console.log(action.payload)
      const { price,title,images,id } = action.payload;
      // const newItem = { ...product, amount: 1 };
      // console.log(newItem)
      const cartItemIndex = state.cart.findIndex((item) => item.id === id);
      if (cartItemIndex !== -1) {
        state.cart[cartItemIndex].amount += 1;
      } else {
        state.cart.push({price,title,images,id,amount:1});
        state.dot.push(id);
      }
      state.itemAmount = state.cart.reduce((accumulator, current) => accumulator + current.amount, 0);
      // console.log(state)
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const removedItem = state.cart.find((item) => item.id === id);
      if (removedItem) {
        state.cart = state.cart.filter((item) => item.id !== id);
        state.dot = state.dot.filter((dotId) => dotId !== id);
        state.itemAmount -= removedItem.amount
      }

      state.total = state.cart.reduce((accumulator, current) => accumulator + current.price * current.amount, 0)
    },
    clearCart(state) {
      state.cart = [];
      state.itemAmount = 0;
      state.total = 0;
      state.dot = [];
    },
    increaseAmount(state, action) {
      const id = action.payload;
      const cartItem = state.cart.find((item) => item.id === id);
      if (cartItem) {
        cartItem.amount += 1;
        state.itemAmount += 1;
        state.total += cartItem.price;
      }
    },
    decreaseAmount(state, action) {
      const id = action.payload;
      const cartItem = state.cart.find((item) => item.id === id);
      if (cartItem) {
        cartItem.amount -= 1;
        state.itemAmount -= 1;
        state.total -= cartItem.price;
        if (cartItem.amount < 1) {
          state.cart = state.cart.filter((item) => item.id !== id);
          state.dot = state.dot.filter((dotId) => dotId !== id);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart, increaseAmount, decreaseAmount } = cartSlice.actions;
export default cartSlice.reducer;
