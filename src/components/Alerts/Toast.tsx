import { toast, ToastContainer, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ToastProps {
  message: string;
  type?: 'info' | 'success' | 'warning' | 'error'; // Define types of notifications
  options?: ToastOptions; // Optional customization for the toast
}

const Toast: React.FC = () => {
  return <ToastContainer position="bottom-left" autoClose={3000} />;
};

export const showToast = (props: ToastProps) => {
  const { message, type = 'info', options } = props;

  switch (type) {
    case 'success':
      toast.success(message, options);
      break;
    case 'error':
      toast.error(message, options);
      break;
    case 'warning':
      toast.warn(message, options);
      break;
    default:
      toast.info(message, options);
      break;
  }
};

export default Toast;
