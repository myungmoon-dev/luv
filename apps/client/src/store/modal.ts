import { ReactNode } from "react";
import { create } from "zustand";

interface IModalState {
  isOpen: boolean;
  children: ReactNode;
  open: (children: ReactNode) => void;
  close: () => void;
}

const useModalStore = create<IModalState>((set) => ({
  isOpen: false,
  children: null,
  open: (children) => set({ isOpen: true, children }),
  close: () => set({ isOpen: false }),
}));

export default useModalStore;
