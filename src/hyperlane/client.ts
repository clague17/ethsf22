import { chainConnectionConfigs, AbacusCore, MultiProvider } from "@abacus-network/sdk";
import { ethers } from "ethers";
// You can use a custom defined provider, say for a local node:
const ethereum = {
  provider: new ethers.providers.JsonRpcProvider(
    "https://eth-mainnet.g.alchemy.com/v2/mDGjPNspZwJVBVWK3lTpdolCLczs2IrD"
  ),
};
const polygon = {
  provider: new ethers.providers.JsonRpcProvider("https://rpc-mainnet.matic.network"),
};
// Or you can use the SDK's default configs and providers:
const celo = chainConnectionConfigs.celo;
const optimism = chainConnectionConfigs.optimism;
const multiProvider = new MultiProvider({ ethereum, polygon, celo, optimism });

const environment = "mainnet";
export const HyperlaneClient = AbacusCore.fromEnvironment(environment, multiProvider);
