import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    getTotal: (state) => {
      let { quantity, total } = state.products.reduce(
        (cartTotal, cartItem) => {
          console.log("carttotal" + cartTotal);
          console.log("cartitem" + cartItem);
          const { price, quantity } = cartItem;
          console.log(price, quantity);
          const itemTotal = price * quantity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += quantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.total = parseInt(total.toFixed(2));
      state.quantity = quantity;
      //state.total += action.payload.price * action.payload.quantity;
    },
    addProduct: (state, action) => {
      //console.log("payload" + action.payload._id);
      let productIndex = state.products.findIndex(
        (item) => item._id === action.payload._id
      );
      console.log("Index" + productIndex);
      if (productIndex >= 0) {
        state.products[productIndex].quantity += 1;
      } else {
        state.products.push(action.payload);
        state.quantity += 1;
      }
      console.log("prd" + state.products.length);

      //state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProduct: (state, action) => {
      //state.quantity -= 1;
      //state.total -= action.payload.price * action.payload.quantity;
      //state.products.pop(action.payload);
      state.products = state.products.filter(
        (item) => item._id !== action.payload
      );
    },
    increaseItemQuantity: (state, action) => {
      state.products = state.products.map((item) => {
        if (item._id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    decreaseItemQuantity: (state, action) => {
      state.products = state.products.map((item) => {
        if (item._id === action.payload) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    },
  },
});

export const {
  addProduct,
  removeProduct,
  getTotal,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
