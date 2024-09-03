import { ThemeType } from "@/types/common";
import { create } from "zustand";

interface IThemeState {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  switchTheme: () => void;
}

const useThemeStore = create<IThemeState>((set, get) => ({
  theme: "dark",
  setTheme: (theme) => set({ theme }),
  switchTheme: () => {
    const theme = get().theme;
    if (theme === "dark") {
      set({ theme: "light" });
    } else set({ theme: "dark" });
  },
}));

export default useThemeStore;
