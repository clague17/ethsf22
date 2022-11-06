import create from "zustand";

export type Token = {
  name: string;
  address: string;
  projectVintage: {
    id: string;
    project: {
      methodology: string;
      standard: string;
      region: string;
    };
  };
  lat: number;
  lng: number;
  regionName: string;
};

export type SuperToken = {
  name?: string;
  token: Token;
  amount: string;
  lat?: number;
  lng?: number;
  regionName?: string;
};

interface TokenState {
  tokens: Token[];
  setTokens: (tokens: Token[]) => void;
}

const useTokenStore = create<TokenState>((set) => ({
  tokens: [] as Token[],
  setTokens: (newTokens: Token[]) => set(() => ({ tokens: newTokens })),
}));

export default useTokenStore;
