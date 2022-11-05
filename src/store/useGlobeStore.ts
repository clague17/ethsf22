import create from "zustand";
import { RegionMap } from "../components/SearchFilter";

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
  region: { name: "United States", ...RegionMap.get("United States")! },
  setRegion: (newRegion: Region) => set(() => ({ region: newRegion })),
}));

export default useGlobeStore;
