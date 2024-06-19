import { createAsyncThunk } from "@reduxjs/toolkit";
import dropbox from "../../utils/dropbox.ts";

/** Async thunk to delete a file from Dropbox. */

const deleteItem = createAsyncThunk('dropbox/deleteItem', async (path: string, { rejectWithValue }) => {
  try {
    const response =  await dropbox.filesDeleteV2({ path });

    return {
      status: response.status,
      result: response.result,
    };
  } catch (error: any) {
    return rejectWithValue({
      status: error.status,
      result: null,
      message: error.message,
    });
  }
});

export default deleteItem;
