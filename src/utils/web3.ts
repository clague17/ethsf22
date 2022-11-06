import type { Chain } from "wagmi";
import _ from "lodash";

export function ellipseAddress(address?: string, width = 4): string {
  if (!address) {
    return "";
  }
  return `${address.slice(0, width)}...${address.slice(-width)}`;
}

export const getIsSupportedChain = (
  chainId: number,
  isDev: boolean
): boolean => {
  return getSupportedChainIds(isDev).includes(chainId);
};

export const getSupportedChainIds = (isDev: boolean): number[] => {
  return getSupportedChains(isDev).map((x) => x.id);
};

export const getSupportedChains = (isDev: boolean): SpiralsChain[] => {
  let supportedChains: SpiralsChain[] = Array.from(SUPPORTED_CHAINS.values());

  if (isDev) {
    supportedChains = supportedChains.concat(
      ...Array.from(TESTNET_CHAINS.values())
    );
  }
  return supportedChains;
};

export enum ChainType {
  CELO = "celo",
  ETHEREUM = "ethereum",
  POLYGON = "polygon",
}

export const getChainType = (
  chainID: number | undefined,
  isDev: boolean
): ChainType | undefined => {
  return _.find(
    getSupportedChains(isDev),
    (x: SpiralsChain) => x.id === chainID
  )?.type;
};

export const CELO_MAINNET_CHAIN_ID = 42220;
export const ALFAJORES_TESTNET_CHAIN_ID = 44787;
export const ETHEREUM_MAINNET_CHAIN_ID = 1;
export const OPTIMISM_MAINNET_CHAIN_ID = 10;
export const GOERLI_TESTNET_CHAIN_ID = 5;
export const POLYGON_MAINNET_CHAIN_ID = 137;
export const MUMBAI_TESTNET_CHAIN_ID = 80001;

export interface SpiralsChain extends Chain {
  logo?: string;
  type: ChainType;
  testnet: boolean;
}

export const SUPPORTED_CHAINS: Map<number, SpiralsChain> = new Map([
  [
    ETHEREUM_MAINNET_CHAIN_ID,
    {
      id: ETHEREUM_MAINNET_CHAIN_ID,
      type: ChainType.ETHEREUM,
      name: "Ethereum",
      nativeCurrency: {
        name: "Ether",
        symbol: "ETH",
        decimals: 18,
      },
      network:
        "https://eth-mainnet.g.alchemy.com/v2/mDGjPNspZwJVBVWK3lTpdolCLczs2IrD",
      rpcUrls: {
        default:
          "https://eth-mainnet.g.alchemy.com/v2/mDGjPNspZwJVBVWK3lTpdolCLczs2IrD",
      },
      blockExplorers: {
        default: {
          name: "EtherScan",
          url: "https://etherscan.io/",
        },
        etherscan: { name: "", url: "" },
      },
      testnet: false,
      logo: "/chains/ethereum.svg",
    },
  ],
  [
    OPTIMISM_MAINNET_CHAIN_ID,
    {
      id: OPTIMISM_MAINNET_CHAIN_ID,
      type: ChainType.ETHEREUM,
      name: "Optimism",
      nativeCurrency: {
        name: "Ether",
        symbol: "ETH",
        decimals: 18,
      },
      network:
        "https://opt-mainnet.g.alchemy.com/v2/ydzxz2IZGUFMrE5hQdRkbfUmi2nLNH4I",
      rpcUrls: {
        default:
          "https://opt-mainnet.g.alchemy.com/v2/ydzxz2IZGUFMrE5hQdRkbfUmi2nLNH4I",
      },
      blockExplorers: {
        default: {
          name: "EtherScan",
          url: "https://etherscan.io/",
        },
        etherscan: { name: "", url: "" },
      },
      testnet: false,
      logo: "/chains/ethereum.svg",
    },
  ],
  [
    POLYGON_MAINNET_CHAIN_ID,
    {
      id: POLYGON_MAINNET_CHAIN_ID,
      type: ChainType.POLYGON,
      name: "Polygon",
      nativeCurrency: {
        name: "Matic",
        symbol: "MATIC",
        decimals: 18,
      },
      network: "https://polygon-rpc.com",
      blockExplorers: {
        default: {
          name: "PolygonScan",
          url: "https://polygonscan.com/",
        },
        etherscan: { name: "", url: "" },
      },
      rpcUrls: {
        default: "https://polygon-rpc.com",
      },
      testnet: false,
      logo: `/chains/polygon.svg`,
    },
  ],
  [
    CELO_MAINNET_CHAIN_ID,
    {
      id: CELO_MAINNET_CHAIN_ID,
      type: ChainType.CELO,
      name: "Celo",
      nativeCurrency: {
        name: "Celo",
        symbol: "CELO",
        decimals: 18,
      },
      network: "https://forno.celo.org",
      rpcUrls: {
        default: "https://forno.celo.org",
      },
      blockExplorers: {
        default: {
          name: "Celo Blockscout",
          url: "https://explorer.celo.org/",
        },
        etherscan: { name: "", url: "" },
      },
      testnet: false,
      logo: "/chains/celo.svg",
    },
  ],
]);

export const TESTNET_CHAINS: Map<number, SpiralsChain> = new Map([
  [
    GOERLI_TESTNET_CHAIN_ID,
    {
      id: GOERLI_TESTNET_CHAIN_ID,
      type: ChainType.ETHEREUM,
      name: "Goerli",
      nativeCurrency: {
        name: "Goerli ETH",
        symbol: "GETH",
        decimals: 18,
      },
      network: "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      rpcUrls: {
        default: "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      },
      blockExplorers: {
        default: {
          name: "GoerliScan",
          url: "https://goerli.etherscan.io/",
        },
        etherscan: { name: "", url: "" },
      },
      testnet: true,

      logo: `/chains/ethereum.svg`,
    },
  ],
  [
    MUMBAI_TESTNET_CHAIN_ID,
    {
      id: MUMBAI_TESTNET_CHAIN_ID,
      type: ChainType.POLYGON,
      name: "Mumbai",
      nativeCurrency: {
        name: "MATIC",
        symbol: "MATIC",
        decimals: 18,
      },
      network:
        "https://polygon-mumbai.g.alchemy.com/v2/FBLKdjji7knNPlTxO7QWoxA9S2RcCeV3",
      rpcUrls: {
        default:
          "https://polygon-mumbai.g.alchemy.com/v2/FBLKdjji7knNPlTxO7QWoxA9S2RcCeV3",
      },
      blockExplorers: {
        default: {
          name: "MumbaiScan",
          url: "https://mumbai.polygonscan.com/",
        },
        etherscan: { name: "", url: "" },
      },
      testnet: true,
      logo: `/chains/polygon.svg`,
    },
  ],
  [
    ALFAJORES_TESTNET_CHAIN_ID,
    {
      id: ALFAJORES_TESTNET_CHAIN_ID,
      type: ChainType.CELO,
      name: "Alfajores",
      nativeCurrency: {
        decimals: 18,
        name: "Celo",
        symbol: "CELO",
      },
      network: "https://alfajores-forno.celo-testnet.org",
      rpcUrls: {
        default: "https://alfajores-forno.celo-testnet.org",
      },
      blockExplorers: {
        default: {
          name: "Alfajores Blockscout",
          url: "https://alfajores-blockscout.celo-testnet.org",
        },
        etherscan: { name: "", url: "" },
      },
      testnet: true,
      logo: "/chains/celo.svg",
    },
  ],
]);

interface TOKEN_ADDRESS {
  [key: string]: string;
}

export const TOKEN_ADDRESSES: Map<number, any> = new Map<number, TOKEN_ADDRESS>(
  [
    [
      CELO_MAINNET_CHAIN_ID,
      {
        celo: "0x471EcE3750Da237f93B8E339c536989b8978a438",
        cUSD: "0x765de816845861e75a25fca122bb6898b8b1282a",
        spcUSD: "0x0DDA45D87751e9b5c8542527eeC57d001942898a",
        cEUR: "0xd8763cba276a3738e6de85b4b3bf5fded6d6ca73",
      },
    ],
    [
      ALFAJORES_TESTNET_CHAIN_ID,
      {
        celo: "0xF194afDf50B03e69Bd7D057c1Aa9e10c9954E4C9",
        cUSD: "0x874069fa1eb16d44d622f2e0ca25eea172369bc1",
        spcUSD: "",
        cEUR: "0x10c892a6ec43a53e45d0b916b4b7d383b1b78c0f",
      },
    ],
  ]
);
