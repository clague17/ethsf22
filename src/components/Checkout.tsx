import { Box, Button, useDisclosure, VStack, HStack } from "@chakra-ui/react";
import { TokenSelector } from "./TokenSelector";
import { VaultTokenPair, ChainID, SUPPORTED_TOKENS } from "../utils/types";
import { useState } from "react";
import ConnectWalletButton from "./ConnectWalletButton";
import { ConnectedChain } from "./ConnectedChain";
import { useAccount, useNetwork } from "wagmi";

const Checkout = () => {
  const [selectedTokenIndex, setSelectedTokenIndex] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { address } = useAccount();
  const { chain: activeChain } = useNetwork();

  return (
    <VStack pt="4em" pb="4em" spacing="2em">
      <HStack spacing="2em">
        <Box boxSize="45px" w="180">
          <ConnectedChain activeChain={activeChain} />
        </Box>
        <TokenSelector
          userAddress={address}
          activeChain={activeChain}
          supportedTokens={SUPPORTED_TOKENS.filter(
            (tokenPair) => tokenPair.chainID === activeChain?.id
          )}
          selectedTokenIndex={selectedTokenIndex}
          setSelectedTokenIndex={setSelectedTokenIndex}
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
        />
      </HStack>
      {address ? (
        <Box>
          <Button>Offset</Button>
        </Box>
      ) : (
        <ConnectWalletButton />
      )}
    </VStack>
  );
};

export default Checkout;
