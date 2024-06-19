import { Box, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Stack } from "@mui/material";
import { bindMenu, bindTrigger } from "material-ui-popup-state";
import { usePopupState } from "material-ui-popup-state/hooks";
import React, { FC } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import OpenWithIcon from "@mui/icons-material/OpenWith";
import LinkIcon from "@mui/icons-material/Link";
import EditIcon from "@mui/icons-material/Edit";
import { useAppDispatch } from "../../hooks/redux.ts";
import deleteItem from "../../redux/actions/deleteItem.ts";
import { updateFiles } from "../../redux/slice/updateItemsSlice.ts";
import showToast from "../../utils/toast.ts";


interface IItemActionsButton {
  itemPath: string;
}

/** Action button for each row */

const ItemActionsButton: FC<IItemActionsButton> = ({ itemPath }) => {

  const popupState = usePopupState({ variant: "popover", popupId: "itemActionsMenu" });

  const handleNotImplementedClick = () => {
    showToast("Not Implemented", "error");
  };

  const dispatch = useAppDispatch();

  const handleDeleteItem = async () => {
    await dispatch(deleteItem(itemPath)).then((response) => {
      if (response.meta.requestStatus === "rejected") {
        showToast("Error deleting item", "error");
      } else {
        showToast("Deleted successfully", "success");
      }
    });

    dispatch(updateFiles());
  };

  return (
    <>
      <Stack>
        <IconButton
          {...bindTrigger(popupState)}
          onClick={(event: React.MouseEvent) => {
            bindTrigger(popupState).onClick(event);
            event.stopPropagation();
          }}
        >
          <MoreVertIcon sx={{ color: "white" }} />
        </IconButton>
        <Menu
          sx={{
            ".MuiMenu-paper": {
              border: "1px solid #434240",
              backgroundColor: "#242321",
              color: "white",
            },
          }}
          {...bindMenu(popupState)}>
          <MenuItem onClick={() => {
            popupState.close;
            handleDeleteItem();
          }}
          >
            <ListItemIcon>
              <DeleteIcon sx={{ color: "white" }} fontSize="small" />
            </ListItemIcon>
            <ListItemText>Delete</ListItemText>
          </MenuItem>
          <Box onClick={handleNotImplementedClick}>
            <MenuItem onClick={popupState.close}>
              <ListItemIcon>
                <ContentCopyIcon sx={{ color: "white" }} fontSize="small" />
              </ListItemIcon>
              <ListItemText>Copy</ListItemText>
            </MenuItem>
            <MenuItem onClick={popupState.close}>
              <ListItemIcon>
                <LinkIcon sx={{ color: "white" }} fontSize="small" />
              </ListItemIcon>
              <ListItemText>Copy Link</ListItemText>
            </MenuItem>
            <MenuItem onClick={popupState.close}>
              <ListItemIcon>
                <OpenWithIcon sx={{ color: "white" }} fontSize="small" />
              </ListItemIcon>
              <ListItemText>Move</ListItemText>
            </MenuItem>
            <MenuItem onClick={popupState.close}>
              <ListItemIcon>
                <EditIcon sx={{ color: "white" }} fontSize="small" />
              </ListItemIcon>
              <ListItemText>Rename</ListItemText>
            </MenuItem>
          </Box>
        </Menu>
      </Stack>
    </>
  );
};

export default ItemActionsButton;
