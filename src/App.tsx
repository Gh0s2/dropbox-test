import './App.css'
import { Stack } from "@mui/material";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import PathLine from "./components/PathLine";
import TableContent from "./components/TableContent";
import ToolBar from "./components/ToolBar";

function App() {
  return (
    <Stack width="100%" minHeight="100vh" spacing={2} direction="column">
      <ToolBar/>
      <PathLine/>
      <TableContent/>
      <ToastContainer />
    </Stack>
  );
}

export default App
