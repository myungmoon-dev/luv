import { useGetPopups } from "@/query/popup";
import { ReactNode, useEffect } from "react";

interface IPopupProviderProps {
  children: ReactNode;
}

const PopupProvider = ({ children }: IPopupProviderProps) => {
  const { data } = useGetPopups();

  useEffect(() => {
    if (!data) return;

    data.popups.forEach((popup) => {
      window.open(`/popup?src=${encodeURIComponent(popup.imageUrl)}`, "_blank", "width=800,height=600");
    });
  }, [data]);

  return <>{children}</>;
};

export default PopupProvider;
