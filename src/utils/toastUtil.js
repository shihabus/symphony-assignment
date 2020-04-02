import { toast } from "react-toastify";

const SuccessToast = (message, config = {}) => toast.success(message, config);
const ErrorToast = (message, config = {}) => toast.error(message, config);
const InfoToast = (message, config = {}) => toast.info(message, config);

export { SuccessToast, ErrorToast, InfoToast };
