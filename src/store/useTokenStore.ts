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
  tokenSelection: SuperToken | null;
  setTokens: (tokens: Token[]) => void;
  setTokenSelection: (token: SuperToken) => void;
}

const useTokenStore = create<TokenState>((set) => ({
  tokens: [] as Token[],
  tokenSelection: null,
  setTokens: (newTokens: Token[]) => set(() => ({ tokens: newTokens })),
  setTokenSelection: (tokenSelection: SuperToken) =>
    set(() => ({ tokenSelection: tokenSelection })),
}));

export default useTokenStore;
