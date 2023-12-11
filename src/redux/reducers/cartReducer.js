import { createReducer } from "@reduxjs/toolkit";
import { addProduct } from "../actions/cartActions";
import { deleteProduct } from "../actions/cartActions";
import { addCart } from "../actions/cartActions";

const initialState = {
  products: [],
  totalItems: 0,
};

const cartReducer = createReducer(initialState, (builder) => {
  return builder

    .addCase(addProduct, (state, action) => {
      let newState = {};
      newState.products = [...state.products, action.payload]; //filter
      newState.totalItems = newState.products.length;

      return newState;
    })
    .addCase(deleteProduct, (state, action) => {
      let newState = {};
      newState.products = [...state.products];
      newState.products = newState.products.filter(
        (product) => product._id !== action.payload._id
      );
      newState.totalItems = newState.products.length;
      return newState;
    })
    .addCase(addCart, (state, action) => {
      const newStore = { ...state };
      newStore.products = action.payload;
      newStore.totalItems = action.payload.length; //ojo con esto
      return newStore;
    });
});

export default cartReducer;
