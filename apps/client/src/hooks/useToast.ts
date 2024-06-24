import { toast } from "react-toastify";

interface IShowParams {
  description?: string;
  type?: "success" | "warning" | "error" | "info";
}

export const useToast = () => {
  const show = ({ description, type }: IShowParams) => {
    toast(description, {
      autoClose: 3000,
      type,
    });
  };

  return { show };
};
