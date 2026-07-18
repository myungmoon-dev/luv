import { IGetBoardListResponse, IGetBoardResponse } from "@/types/board/response";
import { BoardType } from "type";
import { api } from ".";

/** 백엔드 기본 페이지 사이즈 (PageResponse에 totalPages가 없어 프론트에서 계산) */
export const BOARD_PAGE_SIZE = 10;

export const getBoardList = async ({
  page = 0,
  boardType,
}: { page?: number; boardType?: BoardType } = {}) => {
  const { data } = await api.get<IGetBoardListResponse>("/boards", {
    params: { page, size: BOARD_PAGE_SIZE, ...(boardType && { type: boardType }) },
  });

  return data;
};

export const getBoard = async ({ boardId }: { boardId: string }) => {
  const { data } = await api.get<IGetBoardResponse>(`/boards/${boardId}`);

  return data;
};

export const postBoard = async (board: FormData) => {
  const { data } = await api.post("/boards", board, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

export const putBoard = async ({ id, form }: { id: string; form: FormData }) => {
  const { data } = await api.patch(`/boards/${id}`, form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

export const deleteBoard = async ({ boardId }: { boardId: string }) => {
  const { data } = await api.delete(`/boards/${boardId}`);

  return data;
};

// 백엔드에 다건 삭제 엔드포인트가 없어 단건 삭제를 병렬 호출
export const deleteBoardList = async (ids: string[]) => {
  await Promise.all(ids.map((id) => api.delete(`/boards/${id}`)));
};
