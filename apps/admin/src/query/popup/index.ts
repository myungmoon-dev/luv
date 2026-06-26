import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import popupKeys from "./keys";
import { deletePopup, getPopups, postPopup, putPopupShow } from "@/api/popup";

export const useGetPopups = ({ onlyShow }: { onlyShow: boolean | null }) => {
  return useQuery({
    queryKey: popupKeys.list(onlyShow),
    queryFn: () => getPopups({ onlyShow }),
  });
};

export const usePostPopup = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: postPopup,
    onSuccess: () => qc.invalidateQueries({ queryKey: popupKeys.all }),
  });
};

export const useDeletePopup = () => useMutation({ mutationFn: deletePopup });

export const usePutPopupShow = () => useMutation({ mutationFn: putPopupShow });
