import { TableCell, TableRow } from "@mui/material";
import React, { FC } from "react";
import { formatDate } from "../../helpers/formatDate.ts";
import { useAppDispatch } from "../../hooks/redux.ts";
import getSharingLink from "../../redux/actions/getSharingLink.ts";
import { setPath } from "../../redux/slice/pathSlice.ts";
import ItemActionsButton from "./ItemActionsButton.tsx";
import ItemImagePicker from "./ItemImagePicker.tsx";


type DropBoxItems = {
  ".tag": string
  id: string
  name: string
  path_display: string
  path_lower: string
  client_modified: Date
}

interface IDropboxTableBody {
  items: DropBoxItems[],
}

/** Component for table row */

const DropboxTableRow: FC<IDropboxTableBody> = ({ items }) => {

  const dispatch = useAppDispatch();

  const openItem = (item: any, event: React.MouseEvent) => {
    if ((event.target as HTMLElement).tagName !== "TD") {
      return;
    }

    if (item[".tag"] === "folder") {
      dispatch(setPath(item.path_display));
      localStorage.setItem("path", item.path_display);
    } else if (item[".tag"] === "file") {
      dispatch(getSharingLink(item.path_lower));
    }
  };

  return (
    items.map((item) => (
      <TableRow
        key={item.name}
        onClick={(event) => {
          openItem(item, event);
        }}
        sx={{
          "&.MuiTableRow-root:hover": {
            backgroundColor: "#121211",
            cursor: "hover",
          },
        }}
      >
        <TableCell width="100px">
          <ItemImagePicker itemType={item[".tag"]} />
        </TableCell>
        <TableCell sx={{ color: "white" }}>{item.name}</TableCell>
        <TableCell
          sx={{ color: "white" }}>{item?.client_modified ? formatDate(item?.client_modified) : "--"}</TableCell>
        <TableCell>
          <ItemActionsButton itemPath={item.path_lower} />
        </TableCell>
      </TableRow>
    ))
  );
};

export default DropboxTableRow;
