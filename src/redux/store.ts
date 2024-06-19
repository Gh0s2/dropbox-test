import { combineReducers, configureStore } from "@reduxjs/toolkit";
import fetchItemSlice from "./slice/fetchItemSlice.ts";
import pathSlice from "./slice/pathSlice.ts";
import updateItemsSlice from "./slice/updateItemsSlice.ts";

const reducer = combineReducers({
  fetchItemSlice,
  pathSlice,
  updateItemsSlice,
});

export const store = configureStore({
  reducer,
});

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
