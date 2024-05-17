import { create } from "zustand";

interface IAuthState {
  uid: string | null;
  email: string | null;
  name: string | null;
  setUid: (uid: string) => void;
  setEmail: (email: string | null) => void;
  setName: (name: string) => void;
}

const useAuthStore = create<IAuthState>((set) => ({
  uid: null,
  email: null,
  name: null,
  setUid: (uid) => set({ uid }),
  setEmail: (email) => set({ email }),
  setName: (name) => set({ name }),
}));

export default useAuthStore;
