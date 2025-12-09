import { create } from "zustand";

import { MissionLocation } from "type";

interface IMissionNewsState {
  selectedLocation: MissionLocation | "all";
  setSelectedLocation: (location: MissionLocation | "all") => void;
}

const useMissionNewsStore = create<IMissionNewsState>((set) => ({
  selectedLocation: "all",
  setSelectedLocation: (location) => set({ selectedLocation: location }),
}));

export default useMissionNewsStore;

