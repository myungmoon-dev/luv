import { ReactNode } from "react";
import { create } from "zustand";

interface IBottomSheetState {
  isOpen: boolean;
  children: ReactNode | null;
  open: (children: ReactNode) => void;
  close: () => void;
}

const useBottomSheetStore = create<IBottomSheetState>((set) => ({
  isOpen: false,
  children: null,
  open: (children) => set({ isOpen: true, children }),
  close: () => set({ isOpen: false, children: null }),
}));

export default useBottomSheetStore;

