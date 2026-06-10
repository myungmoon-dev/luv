import type { StaffTabType } from "type";

export const ministerKeys = {
  all: ["staff"],
  list: (page?: number, tabType?: StaffTabType) => [...ministerKeys.all, "list", tabType, page],
};
