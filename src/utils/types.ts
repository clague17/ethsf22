import { ethers } from "ethers";

export enum ChainID {
  ETHEREUM = 1,
  POLYGON = 137,
  CELO = 42220,
  OPTIMISM = 10,
  // Testnets
  GOERLI = 5,
  MUMBAI = 80001,
  ALFAJORES = 44787,
}

export const TESTNET_CHAIN_IDS = [
  ChainID.GOERLI,
  ChainID.MUMBAI,
  ChainID.ALFAJORES,
];

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
  symbol?: TokenSymbol;
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

export interface VaultTokenPair {
  chainID: number;
  input: InputToken;
  vault: VaultToken;
  tokenID?: number;
}

export interface VaultToken extends TokenInfo {
  balance?: TokenBalance;
  usdPrice?: number;
  blockExplorerUrl?: string;
}

export interface TokenBalance {
  value: ethers.BigNumber;
  decimals: number;
  refetch(): Promise<void>;
}

export const SUPPORTED_CHAINS = [
  {
    id: ChainID.POLYGON,
    name: "Polygon",
    logo: "https://seeklogo.com/images/P/polygon-matic-logo-1DFDA3A3A8-seeklogo.com.png",
  },
  {
    id: ChainID.OPTIMISM,
    name: "Optimism",

    logo: "https://gateway.optimism.io/static/media/optimism.caeb9392.svg",
  },
  {
    id: ChainID.CELO,
    name: "Celo",
    logo: "https://cryptologos.cc/logos/celo-celo-logo.png",
  },
];

export const SUPPORTED_TOKENS: VaultTokenPair[] = [
  {
    chainID: ChainID.POLYGON,
    input: {
      symbol: "USDC",
      address: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
      imgURL: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png",
    },
    vault: {
      address: "0xbB9E5D0Ecbf48C5D71FcaFe64906aC5F598eD7DC",
    },
  },
  // {
  //   chainID: ChainID.POLYGON,
  //   input: {
  //     symbol: "MATIC",
  //     imgURL:
  //       "https://seeklogo.com/images/P/polygon-matic-logo-1DFDA3A3A8-seeklogo.com.png",
  //   },
  //   vault: {
  //     address: "",
  //   },
  // },
  {
    chainID: ChainID.CELO,
    input: {
      symbol: "CELO",
      imgURL: "https://cryptologos.cc/logos/celo-celo-logo.png",
    },
    vault: {
      address: "0xFa3F967095a7caf4A94a52538d4Cc471caaef21A",
    },
  },
  {
    chainID: ChainID.CELO,
    input: {
      symbol: "cUSD",
      address: "0x765DE816845861e75A25fCA122bb6898B8B1282a",
      imgURL: "https://s2.coinmarketcap.com/static/img/coins/200x200/7236.png",
    },
    vault: {
      address: "0xe42233E95670cb800f3A0cDaBFC7baFEE61668D6",
    },
  },
  {
    chainID: ChainID.OPTIMISM,
    input: {
      symbol: "ETH",
      imgURL:
        "https://seeklogo.com/images/E/ethereum-logo-EC6CDBA45B-seeklogo.com.png",
    },
    vault: {
      address: "0x371e17a572d3EF741afDCb7FE5e0Cd5088139F1c",
    },
  },
];
