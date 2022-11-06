import {
  Box,
  Button,
  useDisclosure,
  VStack,
  HStack,
  Slider,
  SliderFilledTrack,
  Center,
  SliderMark,
  SliderThumb,
  UseToastOptions,
  SliderTrack,
  Container,
  useToast,
  ToastId,
} from "@chakra-ui/react";
import { TokenSelector } from "./TokenSelector";
import { VaultTokenPair, ChainID, SUPPORTED_TOKENS } from "../utils/types";
import { useEffect, useState } from "react";
import ConnectWalletButton from "./ConnectWalletButton";
import { ConnectedChain } from "./ConnectedChain";
import {
  useAccount,
  useNetwork,
  useContractWrite,
  useContractRead,
  usePrepareContractWrite,
} from "wagmi";
import useEmissionsStore from "../store/useEmissionsStore";
import { MutableRefObject, useRef } from "react";
import { ethers } from "ethers";
import xCO2ABI from "../../contracts/out/xCO2.sol/xCO2.json";
import useTokenStore from "../store/useTokenStore";

const Checkout = () => {
  const [selectedTokenIndex, setSelectedTokenIndex] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { address } = useAccount();
  const { chain: activeChain } = useNetwork();
  const { emissions } = useEmissionsStore();
  console.log("emissions", emissions);
  const toast = useToast();
  const toastIdRef = useRef() as MutableRefObject<ToastId>;
  const [isTxnLoading, setIsTxnLoading] = useState(false);
  const { tokenSelection } = useTokenStore();
  const str = JSON.stringify(tokenSelection, null, 2);

  console.log("tokenSelection", tokenSelection);

  const TCO2 = "0x463de2a5c6E8Bb0c87F4Aa80a02689e6680F72C7";

  const supportedTokens = SUPPORTED_TOKENS.filter(
    (tokenPair) => tokenPair.chainID === activeChain?.id
  );

  const amountTCO2Total = emissions.tCO2 * 1.1; // 10% fee for Toucan
  console.log("amountTCO2Total", amountTCO2Total);
  const amountUSDCNeeded = ethers.utils.parseEther(
    (amountTCO2Total * 1.9).toString()
  ); // estimate

  // const fetchUSDCRequired = async () => {
  //   console.log("B");
  //   const provider = new ethers.providers.AlchemyProvider(
  //     "matic",
  //     process.env.ALCHEMY_POLYGON_KEY
  //   );
  //   const contract = new ethers.Contract(
  //     "0x0E14Ac5B2B25867BF08328746c04Adadd6dB6425",
  //     [
  //       "function getUSDCNeeded(address,uint256) external view returns (uint256)",
  //     ],
  //     provider
  //   );
  //   const usdNeeded = await contract.getUSDCNeeded(
  //     TCO2,
  //     ethers.utils.parseEther(emissions.tCO2.toString())
  //   );
  //   setAmountUSDCNeeded(usdNeeded);
  // };

  // useEffect(() => {
  //   console.log("A");
  //   fetchUSDCRequired();
  // }, []);

  const { data: amountNativeTokenNeeded, error: readError } = useContractRead({
    addressOrName: supportedTokens[selectedTokenIndex]?.vault.address!,
    contractInterface: xCO2ABI.abi,
    functionName: "fromUSD",
    args: [
      amountUSDCNeeded
        .mul(ethers.BigNumber.from(101))
        .div(ethers.BigNumber.from(100))
        .toString(),
    ],
    enabled: !!address,
  });

  const {
    config,
    isLoading: prepareConfigLoading,
    error: prepareConfigError,
  } = usePrepareContractWrite({
    addressOrName: supportedTokens[selectedTokenIndex]?.vault.address!,
    contractInterface: xCO2ABI.abi,
    functionName: "offsetX",
    args: [
      TCO2,
      amountUSDCNeeded.toString(),
      "Spirals",
      address,
      "Doug",
      "Healing the planet @ ETH SF",
    ],
    overrides: {
      // value: +ethers.utils.formatEther(amountNativeTokenNeeded!) * 1.1,
      value: amountNativeTokenNeeded,
    },
    enabled: !!address && !!amountNativeTokenNeeded,
    onError: (error) => {
      console.error("usePrepareContractWrite offsetX", error);
    },
  });

  var toastOptions: UseToastOptions;

  const { write: offset } = useContractWrite({
    ...config,
    onSuccess: async (data: any) => {
      const res = await data.wait();

      if (res.status === 1) {
        toastOptions = {
          title: "Success!",
          description:
            "You did it! Offset 100% of your on-chain carbon footprint!",
        };
        toastOptions.status = "success";
        toastOptions.position = "top";
        toastIdRef.current = toast(toastOptions);
      } else {
        toastOptions = {
          title: "Transaction failed",
          description: "Oops! Something went wrong, please try again",
        };
        toastOptions.status = "error";
        toastOptions.position = "top";

        toastIdRef.current = toast(toastOptions);
      }
      setIsTxnLoading(false);
    },
    onError: (error) => {
      toastOptions = {
        title: "Wallet prompt rejected",
        description:
          "If you didn't mean to reject the wallet prompt, please try again",
      };
      toastOptions.status = "warning";
      toastOptions.position = "top";

      toastIdRef.current = toast(toastOptions);

      setIsTxnLoading(false);
    },
  });

  return (
    <VStack pt="4em" pb="4em" spacing="2em">
      <HStack spacing="2em">
        <Box boxSize="45px" w="180">
          <ConnectedChain activeChain={activeChain} />
        </Box>
        <TokenSelector
          userAddress={address}
          activeChain={activeChain}
          supportedTokens={supportedTokens}
          selectedTokenIndex={selectedTokenIndex}
          setSelectedTokenIndex={setSelectedTokenIndex}
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
        />
      </HStack>
      <Box w="30%" alignContent={"center"}>
        <Center>
          {address ? (
            <Button
              isLoading={prepareConfigLoading || isTxnLoading}
              loadingText={"Offsetting..."}
              w="100%"
              onClick={() => {
                setIsTxnLoading(true);
                offset?.();
              }}
            >
              Offset
            </Button>
          ) : (
            <ConnectWalletButton />
          )}
        </Center>
      </Box>
    </VStack>
  );
};

export default Checkout;
