import { createReducer } from "@reduxjs/toolkit";
import {
  setFilterSettings,
  setFilterTotalPages,
  setFilterPage,
} from "../actions/filterSettingsActions";
const initialState = {
  settings: {
    radio: "all",
    text: "",
  },
  totalPages: 1,
  page: 1,
};

const filterSettingsReducer = createReducer(initialState, (builder) => {
  return builder
    .addCase(setFilterSettings, (state, action) => {
      const newStore = { ...state, settings: action.payload, completed: true };
      return newStore;
    })
    .addCase(setFilterTotalPages, (state, action) => {
      const newStore = {
        ...state,
        totalPages: action.payload,
        completed: true,
      };
      return newStore;
    })
    .addCase(setFilterPage, (state, action) => {
      const newStore = {
        ...state,
        page: action.payload,
        completed: true,
      };
      return newStore;
    });
});

export default filterSettingsReducer;
