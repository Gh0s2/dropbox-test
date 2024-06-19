import FolderIcon from "@mui/icons-material/Folder";
import ImageIcon from "@mui/icons-material/Image";
import { FC } from "react";


interface IItemImagePicker {
  itemType: string,
  itemPath?: string
}

/** Image picker for folder/file */

const ItemImagePicker: FC<IItemImagePicker> = ({ itemType }) => {
  return (
    <>
      {itemType === "folder" ? (
        <FolderIcon sx={{ color: "white" }} />
      ) : (
        <ImageIcon sx={{ color: "white" }} />
      )}
    </>
  );
};

export default ItemImagePicker;
