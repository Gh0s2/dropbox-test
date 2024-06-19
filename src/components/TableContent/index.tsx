import {
  CircularProgress, Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux.ts";
import { fetchItemsFromDbx } from "../../redux/slice/fetchItemSlice.ts";
import showToast from "../../utils/toast.ts";
import DropboxTableRow from "./DropboxTableRow.tsx";


/** Dropbox Content Component */

const TableContent = () => {

  const items = useAppSelector((state) => state.fetchItemSlice.items);
  const path = useAppSelector((state) => state.pathSlice.path);
  const isItemsLoading = useAppSelector((state) => state.fetchItemSlice.loading);
  const isItemsUpd = useAppSelector((state) => state.updateItemsSlice.update);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchItemsFromDbx(path)).then((response) => {
      if (response.meta.requestStatus === "rejected") {
        showToast("Error fetching items", "error");
      }
    });
  }, [path, isItemsUpd]);

  return (
    <>
      {isItemsLoading ? (
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{ minWidth: "650px", minHeight: "250px" }}
        >
          <CircularProgress color="inherit" />
        </Stack>
      ) : (
        <TableContainer>
          <Table sx={{ minWidth: "650px" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>
                  <Typography variant="body2" color="white">Name</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2" color="white">Modified</Typography>
                </TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              <DropboxTableRow items={items} />
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default TableContent;
