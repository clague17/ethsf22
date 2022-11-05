import { type AppType } from "next/dist/shared/lib/utils";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import type { Chain } from "wagmi";
import { WagmiConfig, createClient, configureChains } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { ConnectKitProvider } from "connectkit";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { SUPPORTED_CHAINS } from "../utils/web3";

export const { provider, chains } = configureChains(
  Array.from(SUPPORTED_CHAINS.values()),
  [
    jsonRpcProvider({
      priority: 0,
      rpc: (chain: Chain) => ({ http: chain.rpcUrls.default }),
    }),
  ]
);

const client = createClient({
  autoConnect: false,
  connectors: [
    // Place SafeConnector first because in useAutoConnect we use "find" which
    // will always return the first available connector.
    new MetaMaskConnector({ chains }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcodeModalOptions: {
          desktopLinks: ["valora", "metamask"],
          mobileLinks: ["valora", "metamask"],
        },
        qrcode: true,
      },
    }),
  ],
  provider,
});

const queryClient = new QueryClient();

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <WagmiConfig client={client}>
        <QueryClientProvider client={queryClient}>
          <ConnectKitProvider>
            <Component {...pageProps} />
          </ConnectKitProvider>
        </QueryClientProvider>
      </WagmiConfig>
    </ChakraProvider>
  );
};

export default MyApp;
