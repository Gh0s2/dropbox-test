import { Button } from "@mui/material";
import React from "react";
import { Slide, toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../hooks/redux.ts";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import uploadFile from "../../redux/actions/uploadFile.ts";
import { updateFiles } from "../../redux/slice/updateItemsSlice.ts";


/** Upload file button */

const UploadFileButton = () => {
  const dispatch = useAppDispatch();
  const path = useAppSelector((state) => state.pathSlice.path);

  const showToast = (message: string, type: "info" | "success" | "warning" | "error" | "default") => {
    toast(message, {
      type: type,
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
      transition: Slide,
    })
  };

  const handleFileUpload = async (event: React.ChangeEvent) => {
    const target= event.target as HTMLInputElement;

    if (!target.files){
      return;
    }

    const file = target.files[0];
    const fullPath = `${path}/${file.name}`;

    await dispatch(uploadFile({ path: fullPath, file })).then((response) => {
      if (response.meta.requestStatus === "rejected") {
        showToast("Error uploading file", "error");
      } else {
        showToast("File Uploaded", "success");
      }
    });

    dispatch(updateFiles());
  };

  return(
    <>
      <Button
        variant="outlined"
        startIcon={<FileUploadIcon />}
        component="label"
        sx={{
          color: "white",
          borderColor: "white",
          "&:hover": {
            borderColor: "white",
            backgroundColor: "#434240",
          },
        }}
      >
        Upload
        <input type="file" hidden onChange={handleFileUpload} />
      </Button>
    </>
  )
}

export default UploadFileButton;
