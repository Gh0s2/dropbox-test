import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import dropbox from "../../utils/dropbox.ts";

/** Async thunk to get files from Dropbox. */

export const fetchItemsFromDbx = createAsyncThunk(
  'dropbox/fetchItems',
  async (path: string) => {
    try {
      const response = await dropbox.filesListFolder({ path });
      return response.result.entries;
    } catch (error) {
      throw error;
    }
  }
);

interface ItemsState {
  items: any[];
  loading: boolean;
  error: string | undefined | null;
}

const initialState: ItemsState = {
  items: [],
  loading: false,
  error: null,
};

const fetchItemSlice = createSlice({
  name: 'dropbox',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItemsFromDbx.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchItemsFromDbx.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(fetchItemsFromDbx.rejected, (state, action) => {
        state.loading = false;
        state.items = [];
        state.error = action.error.message;
      });
  }
});

export default fetchItemSlice.reducer;
