import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { publicRequest } from "../requestMethods";
// import cartItems from '../../utils/cartItems';

/* const url = "https://course-api.com/react-useReducer-cart-project";
const getProduct = async () => {
  try {
    const res = await publicRequest.get(`products/`);
    // console.log(res.data);
  } catch (error) {
    console.log(error);
  }
}; */
const products = getProduct();
const initialState = {
  cartItems: [],
  products: [],
  quantity: 0,
  total: 0,
};

export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (name, thunkAPI) => {
    try {
      console.log(name);
      const response = await publicRequest.get(`products/find/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Something went wrong");
    }
  }
);
/* if (find >= 0) {
  state.products[find].quantity = state.products[find].quantity + 1;
} else {
  state.quantity += 1;
  state.products.push(action.payload);
} */
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });

      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cartItems = action.payload;
    },
    [getCartItems.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export default cartSlice.reducer;
export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;
