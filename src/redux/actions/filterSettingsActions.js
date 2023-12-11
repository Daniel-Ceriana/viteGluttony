import { createAction } from "@reduxjs/toolkit";

const setFilterSettings = createAction("set_filter_settings", (settings) => {
  return {
    payload: settings,
  };
});
const setFilterTotalPages = createAction(
  "set_filter_total_pages",
  (totalPages) => {
    return {
      payload: totalPages,
    };
  }
);
const setFilterPage = createAction("set_filter_page", (page) => {
  return {
    payload: page,
  };
});

export { setFilterSettings, setFilterTotalPages, setFilterPage };
