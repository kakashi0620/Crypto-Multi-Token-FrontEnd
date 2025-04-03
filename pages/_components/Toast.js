import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastOptions = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeButton: false,
  pauseOnHover: false,
  draggable: false,
  pauseOnFocusLoss: false,
  resumeOnFocus: false,
};

const Toast = {
  success: (message) => toast.success(message, toastOptions),
  info: (message) => toast.info(message, toastOptions),
  warning: (message) => toast.warning(message, toastOptions),
  error: (message) => toast.error(message, toastOptions),
};

export default Toast;
