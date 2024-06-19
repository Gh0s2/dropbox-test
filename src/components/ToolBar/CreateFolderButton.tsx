import FileUploadIcon from "@mui/icons-material/FileUpload";
import { Button, Modal, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux.ts";
import createFolder from "../../redux/actions/createFolder.ts";
import { updateFiles } from "../../redux/slice/updateItemsSlice.ts";
import showToast from "../../utils/toast.ts";
import { FolderNameTextField } from "./components.tsx";


/** Create folder button */

const CreateFolderButton = () => {

  const dispatch = useAppDispatch();
  const path = useAppSelector((state) => state.pathSlice.path);
  const [folderName, setFolderName] = useState("");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCreateFolder = async () => {
    await dispatch(createFolder({ path, folderName })).then((response) => {
      if (response.meta.requestStatus === "rejected") {
        showToast("Error creating folder", "error");
      } else {
        showToast("Folder created", "success");
      }
    });

    dispatch(updateFiles());
    handleClose();
  };


  return (
    <>
      <Button
        variant="outlined"
        startIcon={<FileUploadIcon />}
        onClick={handleOpen}
        sx={{
          color: "white",
          borderColor: "white",
          "&:hover": {
            borderColor: "white",
            backgroundColor: "#434240",
          },
        }}
      >
        Create Folder
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Stack
          direction="column"
          spacing={2}
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: "400px",
            backgroundColor: '#242321',
            border: "1px solid #434240",
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create Folder
          </Typography>
          <FolderNameTextField
            required
            id="folder-name"
            label="Name"
            value={folderName}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setFolderName(event.target.value);
            }}
          />
          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              onClick={handleCreateFolder}
              sx={{
                color: "white",
                borderColor: "white",
                "&:hover": {
                  borderColor: "white",
                  backgroundColor: "#434240",
                },
              }}
            >
              Submit
            </Button>
            <Button
              variant="outlined"
              onClick={handleClose}
              sx={{
                color: "white",
                borderColor: "white",
                "&:hover": {
                  borderColor: "white",
                  backgroundColor: "#434240",
                },
              }}
            >
              Cancel
            </Button>
          </Stack>
        </Stack>
      </Modal>
    </>
  )
}

export default CreateFolderButton;
