import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartproducts: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    getTotal: (state) => {
      let {} = state.cartproducts;
      //state.total += action.payload.price * action.payload.quantity;
    },
    addProduct: (state, action) => {
      //console.log("payload" + action.payload._id);
      let productIndex = state.cartproducts.findIndex(
        (item) => item._id === action.payload._id
      );
      console.log("Index" + productIndex);
      if (productIndex >= 0) {
        state.cartproducts[productIndex].quantity += 1;
      } else {
        state.cartproducts.push(action.payload);
        state.quantity += 1;
      }
      console.log("prd" + state.cartproducts.length);

      //state.cartproducts.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProduct: (state, action) => {
      state.quantity -= 1;
      //state.total -= action.payload.price * action.payload.quantity;
      state.cartproducts.pop(action.payload);
    },
    updateCart: (state, action) => {
      state.total += action.payload.price * action.payload.quantity;
    },
  },
});

export const { addProduct, removeProduct, getTotal } = cartSlice.actions;
export default cartSlice.reducer;
