import { useMutation, useQuery } from "@tanstack/react-query";
import popupKeys from "./keys";
import { deletePopup, getPopups, postPopup, putPopupShow } from "@/api/popup";

export const useGetPopups = ({ onlyShow }: { onlyShow: boolean | null }) => {
  return useQuery({
    queryKey: popupKeys.list(onlyShow),
    queryFn: () => getPopups({ onlyShow }),
  });
};

export const usePostPopup = () => useMutation({ mutationFn: postPopup });

export const useDeletePopup = () => useMutation({ mutationFn: deletePopup });

export const usePutPopupShow = () => useMutation({ mutationFn: putPopupShow });
