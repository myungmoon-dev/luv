import { IYoutube } from "type";
import { create } from "zustand";

interface IVideoState {
  isEdit: boolean;
  setEdit: (isEdit: boolean) => void;
  edittingVideo: IYoutube | null;
  setEdittingVideo: (edittingVideo: IYoutube | null) => void;
}

const useVideoStore = create<IVideoState>((set) => ({
  isEdit: false,
  setEdit: (isEdit) => set({ isEdit }),
  edittingVideo: null,
  setEdittingVideo: (edittingVideo) => set({ edittingVideo }),
}));

export default useVideoStore;
