import { createAsyncThunk } from "@reduxjs/toolkit";
import dropbox from "../../utils/dropbox.ts";

/** Async thunk to get/create sharing link from Dropbox. */

const getSharingLink = createAsyncThunk('dropbox/getSharingLink', async (path: string, { rejectWithValue }) => {
  try {

    const existingImageLink = await dropbox.sharingListSharedLinks({
      path,
      direct_only: true,
    });


    if (existingImageLink.result.links.length > 0) {
      window.open(existingImageLink.result.links[0].url, "_blank");
      return existingImageLink.result.links[0].url;
    }

    const newImageLink = await dropbox.sharingCreateSharedLinkWithSettings({ path });

    window.open(newImageLink.result.url, "_blank");
    return newImageLink.result.url;
  } catch (error: any) {
    return rejectWithValue({
      status: error.status,
      result: error.result,
      message: error.error,
    });
  }
});

export default getSharingLink;
