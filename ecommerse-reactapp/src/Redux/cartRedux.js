import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    getTotal: (state, action) => {
      state.total += action.payload.price * action.payload.quantity;
    },
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProduct: (state, action) => {
      state.quantity -= 1;
      //state.total -= action.payload.price * action.payload.quantity;
      state.products.pop(action.payload);
    },
    updateCart: (state, action) => {
      state.total += action.payload.price * action.payload.quantity;
    },
  },
});

export const { addProduct, removeProduct, getTotal } = cartSlice.actions;
export default cartSlice.reducer;
