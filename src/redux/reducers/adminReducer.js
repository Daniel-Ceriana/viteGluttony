import { createReducer } from "@reduxjs/toolkit";
import { refreshAdmin } from "../actions/adminActions";
const initialState = {
  refresh: {},
};

const adminReducer = createReducer(initialState, (builder) => {
  return builder.addCase(refreshAdmin, (state, action) => {
    let newState = {};
    newState.refresh = [state.refresh, action.payload];

    return newState;
  });
});

export default adminReducer;
