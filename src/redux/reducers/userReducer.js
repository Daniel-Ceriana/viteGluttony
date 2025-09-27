import { createReducer } from "@reduxjs/toolkit";
import {
  signIn,
  signUp,
  signOut,
  verifyToken,
} from "../actions/userActions.js";
const initialState = {
  user: undefined,
};

const userReducer = createReducer(initialState, (builder) => {
  return builder
    .addCase(signIn.fulfilled, (state, action) => {
      if (!action.payload.user) {
        // si no hay user, no toco nada
        return { ...state, loading: false };
      }
      const newStore = {
        ...state,
        loading: false,
        user: action.payload.user,
      };
      if (
        action.payload.user.cart.length == 0 &&
        action.payload.cart.length != 0
      ) {
        //si el usuario que vuelve de la bse de datos no tiene carrito
        newStore.user.cart = action.payload.cart; //le agrego la carta que tengo en el store
      }

      return newStore;
    })
    .addCase(signIn.pending, (state) => {
      return { ...state, loading: true };
    })
    .addCase(signIn.rejected, (state, action) => {
      return { ...state, loading: false, error: action.payload };
    })
    .addCase(signUp.fulfilled, (state, action) => {
      const newStore = { ...state };
      return newStore;
    })
    .addCase(signOut, (state) => {
      return { ...state, user: undefined };
    })
    .addCase(verifyToken.fulfilled, (state, action) => {
      const newStore = { ...state, user: action.payload };
      return newStore;
    });
});

export default userReducer;
