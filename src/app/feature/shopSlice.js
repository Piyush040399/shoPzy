import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  cartData: [],
  totalPrice: 0,
};

export const shopSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProduct: (state, action) => {
      state.data.push(action.payload);
    },
    cartData: (state, action) => {
      let cartProductIndex = state.cartData.findIndex(
        (c) => c.product.id === action.payload.id
      );

      if (cartProductIndex >= 0) {
        state.cartData[cartProductIndex].quantity =
          state.cartData[cartProductIndex].quantity + 1;
      } else {
        state.cartData.push({ product: action.payload, quantity: 1 });
      }
    },

    cartTotalPrice: (state) => {
      state.totalPrice = state.cartData.reduce((total, item) => {
        return total + item.product.price * item.quantity;
      }, 0);
    },

    increaseQuantity: (state, action) => {
      state.cartData = state.cartData.map((item) => {
        if (item.product.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    decreaseQuantity: (state, action) => {
      state.cartData = state.cartData.map((item) => {
        if (item.product.id === action.payload) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    },

    deleteProducts: (state, action) => {
      state.cartData = state.cartData.filter(
        (item) => item.product.id !== action.payload
      );
      state.totalPrice = state.cartData.reduce((total, item) => {
        return total + item.product.price * item.quantity;
      }, 0);
    },
  },
});

export const {
  fetchProduct,
  cartData,
  increaseQuantity,
  decreaseQuantity,
  cartTotalPrice,
  deleteProducts,
} = shopSlice.actions;

export default shopSlice.reducer;
