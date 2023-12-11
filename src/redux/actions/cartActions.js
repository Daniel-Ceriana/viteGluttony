import { createAction } from "@reduxjs/toolkit";

const addProduct = createAction("addProduct", (product) => {
  return {
    payload: product,
  };
});
const deleteProduct = createAction("deleteProduct", (product) => {
  return {
    payload: product,
  };
});
const addCart = createAction("addCart", (cart) => {
  return {
    payload: cart,
  };
});
export { addProduct, deleteProduct, addCart };
