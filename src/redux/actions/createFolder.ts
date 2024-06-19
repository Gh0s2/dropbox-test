import { createAsyncThunk } from "@reduxjs/toolkit";
import dropbox from "../../utils/dropbox.ts";

interface IData {
  path: string,
  folderName: string,
}

/** Async thunk to create a new folder on Dropbox. */

const createFolder = createAsyncThunk('dropbox/createFolder', async (data: IData, { rejectWithValue }) => {
  try {
    const {path, folderName} = data;

    const response = await dropbox.filesCreateFolderV2({
      path: `${path}/${folderName}`,
    });

    return {
      status: response.status,
      result: response.result,
    };
  } catch (error: any) {
    return rejectWithValue({
      status: 'error',
      result: null,
      message: error.message,
    });
  }
});

export default createFolder;
