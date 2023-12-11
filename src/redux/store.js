import { configureStore } from "@reduxjs/toolkit";
import filterSettingsReducer from "./reducers/filterSettingsReducers";
import userReducer from "./reducers/userReducer";
import cartReducer from "./reducers/cartReducer";
import adminReducer from "./reducers/adminReducer";

export const store = configureStore({
  reducer: {
    filterSettings: filterSettingsReducer,
    user: userReducer,
    cart: cartReducer,
    admin: adminReducer,
    // productsFiltered: productReducer, ==== los filtrados van dentro de products
  },
});
