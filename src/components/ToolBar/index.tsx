import { Stack } from "@mui/material";
import CreateFolderButton from "./CreateFolderButton.tsx";
import UploadFileButton from "./UploadFileButton.tsx";


/** Toolbar with upload/create buttons */

const ToolBar = () => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
      >
        <CreateFolderButton/>
        <UploadFileButton/>
      </Stack>
    </>
  )
}

export default ToolBar;
