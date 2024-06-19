import { Slide, toast } from "react-toastify";


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

export default showToast;
