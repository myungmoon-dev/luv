import { create } from "zustand";

import { CongregationNewsType } from "@/types/news/common";

interface ICongregationNewsState {
  selectedMenu: CongregationNewsType | "all";
  setSelectedMenu: (selectedMenu: CongregationNewsType | "all") => void;
}

const useCongregationNewsStore = create<ICongregationNewsState>((set) => ({
  selectedMenu: "all",
  setSelectedMenu: (selectedMenu) => set({ selectedMenu }),
}));

export default useCongregationNewsStore;
