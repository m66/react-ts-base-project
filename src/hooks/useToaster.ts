import { toast } from "react-toastify";

const useToaster = () => {
  const successMessage = (
    text: string,
    duration: number = 5000,
    done: boolean = false
  ) => {
    const autoClose = done ? false : duration;
    toast.success(text, {
      position: "top-right",
      autoClose,
    });
  };

  const errorMessage = (text: string) =>
    toast.error(text, { position: "top-right" });

  const infoMessage = (
    text: string,
    duration: number = 5000,
    done: boolean = false
  ) => {
    const autoClose = done ? false : duration;
    toast.info(text, {
      position: "top-right",
      autoClose,
    });
  };

  const warningMessage = (text: string, configs: any = {}) => {
    toast.warning(text, {
      position: "top-right",
      ...configs,
    });
  };

  const updateMessage = (text: string, id: string = "", configs: any = {}) => {
    toast.update(id, {
      render: text,
      type: "success",
      ...configs,
    });
  };

  return {
    successMessage,
    errorMessage,
    infoMessage,
    warningMessage,
    updateMessage,
  };
};

export default useToaster;
