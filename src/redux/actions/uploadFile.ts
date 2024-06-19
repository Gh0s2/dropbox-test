import { createAsyncThunk } from "@reduxjs/toolkit";
import dropbox from "../../utils/dropbox.ts";

interface IData {
  path: string,
  file: object,
}

/** Async thunk to create a new file on Dropbox. */

const uploadFile = createAsyncThunk('dropbox/uploadFile', async (data: IData, { rejectWithValue }) => {
  try {
    const {path, file} = data;

    const response = await dropbox.filesUpload({
      path,
      contents: file,
    });

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

export default uploadFile;
