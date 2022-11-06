import create from "zustand";

export type Region = {
  name: string;
  lat: number;
  lng: number;
};

interface GlobeState {
  region: Region;
  setRegion: (region: Region) => void;
}

const useGlobeStore = create<GlobeState>((set) => ({
  region: {} as Region,
  setRegion: (newRegion: Region) => set(() => ({ region: newRegion })),
}));

export default useGlobeStore;
