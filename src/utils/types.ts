export enum ChainID {
  ETHEREUM = 1,
  POLYGON = 137,
  CELO = 42220,
  // Testnets
  GOERLI = 5,
  MUMBAI = 80001,
  ALFAJORES = 44787,
}

export const TESTNET_CHAIN_IDS = [ChainID.GOERLI, ChainID.MUMBAI, ChainID.ALFAJORES];

export type TokenSymbol = string;

export const ETH: TokenSymbol = "ETH";
export const USDC: TokenSymbol = "USDC";
export const DAI: TokenSymbol = "DAI";
export const CELO: TokenSymbol = "CELO";
export const cUSD: TokenSymbol = "cUSD";

export const CHAIN_ID_TO_RPC_URL: Map<ChainID, string> = new Map([
  [ChainID.ETHEREUM, process.env.ETHEREUM_RPC_URL ?? ""],
  [ChainID.POLYGON, process.env.POLYGON_RPC_URL ?? ""],
  [ChainID.CELO, process.env.CELO_RPC_URL ?? ""],
  // Testnets
  [ChainID.GOERLI, process.env.GOERLI_RPC_URL ?? ""],
  [ChainID.MUMBAI, process.env.MUMBAI_RPC_URL ?? ""],
  [ChainID.ALFAJORES, process.env.ALFAJORES_RPC_URL ?? ""],
]);

export const NUM_TO_CHAIN_ID: Map<number, ChainID> = new Map([
  [ChainID.ETHEREUM as number, ChainID.ETHEREUM],
  [ChainID.POLYGON as number, ChainID.POLYGON],
  [ChainID.CELO as number, ChainID.CELO],
  // Testnets
  [ChainID.GOERLI as number, ChainID.GOERLI],
  [ChainID.MUMBAI as number, ChainID.MUMBAI],
  [ChainID.ALFAJORES as number, ChainID.ALFAJORES],
]);

// Because CoinGecko API rates are terrible
export const DEFAULT_PRICES = new Map<TokenSymbol, number>([
  [CELO, 0.73],
  [cUSD, 1],
  [USDC, 1.0],
  [DAI, 1.0],
  [ETH, 1300],
]);

export interface InputToken extends TokenInfo {
  price?: number;
}

export interface TokenInfo {
  symbol: TokenSymbol;
  address?: string;
  imgURL?: string;
  name?: string;
}

export const TOKEN_SYMBOL_TO_COIN_GECKO_ID: Map<TokenSymbol, string> = new Map([
  [CELO, "celo"],
  [cUSD, "celo-dollar"],
  [USDC, "usd-coin"],
  [DAI, "dai"],
  [ETH, "ethereum"],
]);
