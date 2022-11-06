import create from "zustand";

export type Emissions = {
  tCO2: number;
  kgCO2: number;
  transactionsCount: number;
  gasUsed: number;
  done: boolean;
};

interface EmissionsState {
  emissions: Emissions;
  setEmissions: (emission: Emissions) => void;
}

const useGlobeStore = create<EmissionsState>((set) => ({
  emissions: { done: false } as Emissions,
  setEmissions: (newEmissions: Emissions) => set(() => ({ emissions: newEmissions })),
}));

export default useGlobeStore;
