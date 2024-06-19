import { createSlice } from "@reduxjs/toolkit";

interface IUpdateItemsState {
  update: boolean;
}

const initialState: IUpdateItemsState = {
  update: false,
};

/** Slice for files update */

export const updateFilesSlice = createSlice({
  name: 'update',
  initialState,
  reducers: {
    updateFiles: (state) => {
      state.update = !state.update;
    },
  },
});

export const { updateFiles } = updateFilesSlice.actions;
export default updateFilesSlice.reducer;
