import { createAction } from "@reduxjs/toolkit";

const refreshAdmin = createAction("refreshAdmin", (refresh) => {
  return {
    payload: refresh,
  };
});
export { refreshAdmin };
