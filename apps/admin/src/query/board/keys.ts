import { BoardType } from "type";

export const boardListKeys = {
  all: ["boardList"],
  list: (page?: number, boardType?: BoardType) => [...boardListKeys.all, "list", page, boardType],
  detail: (id: string) => [...boardListKeys.all, "detail", id],
};
