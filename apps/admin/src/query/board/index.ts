import {
  deleteBoard,
  deleteBoardList,
  getBoard,
  getBoardList,
  postBoard,
  putBoard,
} from "@/api/board";
import { useMutation, useQuery } from "@tanstack/react-query";
import { BoardType } from "type";
import { boardListKeys } from "./keys";

export const useGetBoardList = ({
  page = 0,
  boardType,
}: { page?: number; boardType?: BoardType } = {}) => {
  return useQuery({
    queryFn: () => getBoardList({ page, boardType }),
    queryKey: boardListKeys.list(page, boardType),
  });
};

export const useGetBoard = ({ boardId }: { boardId: string }) => {
  return useQuery({
    queryFn: () => getBoard({ boardId }),
    queryKey: boardListKeys.detail(boardId),
    enabled: !!boardId,
  });
};

export const usePostBoard = () => useMutation({ mutationFn: postBoard });

export const usePutBoard = () => useMutation({ mutationFn: putBoard });

export const useDeleteBoard = () => useMutation({ mutationFn: deleteBoard });

export const useDeleteBoardList = () => useMutation({ mutationFn: deleteBoardList });
