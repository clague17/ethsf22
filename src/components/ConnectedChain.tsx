import {
  Button,
  Center,
  Image,
  Menu,
  MenuButton,
  MenuGroup,
  HStack,
  MenuItem,
  MenuList,
  Text,
  ToastId,
  useToast,
} from "@chakra-ui/react";
import { MutableRefObject, useRef } from "react";
import { useAccount, useNetwork, useSwitchNetwork } from "wagmi";
import {
  VaultTokenPair,
  ChainID,
  SUPPORTED_TOKENS,
  SUPPORTED_CHAINS,
} from "../utils/types";
import { ChevronDownIcon, WarningTwoIcon } from "@chakra-ui/icons";
import _ from "lodash";

export const ConnectedChain = ({ activeChain }: any) => {
  const toast = useToast();
  const toastIdRef = useRef() as MutableRefObject<ToastId>;

  const { connector: activeConnector } = useAccount();

  const activeChainId = activeChain ? activeChain.id : 1;
  const isSupportedChain = SUPPORTED_CHAINS.map(
    (chainInfo: any) => chainInfo.id
  ).includes(activeChainId);

  return (
    <Menu isLazy autoSelect={false}>
      <MenuButton
        px={3}
        as={Button}
        height="100%"
        color="black"
        transition="all 0.2s"
        borderRadius="xl"
        maxH="44px"
        _hover={
          activeChain
            ? { bg: "gray.700", textColor: "white" }
            : { bg: "gray.100" }
        }
        _expanded={
          activeChain
            ? { bg: "gray.700", textColor: "white" }
            : { bg: "gray.100" }
        }
        _focus={{ boxShadow: "outline" }}
        disabled={!activeChain}
      >
        <HStack spacing="0.4em">
          {isSupportedChain ? (
            <>
              <Image
                boxSize="20px"
                objectFit={"contain"}
                marginRight="3px"
                src={
                  _.find(SUPPORTED_CHAINS, (x) => x.id === activeChainId)?.logo
                }
                alt="connected chain"
              />
              <Text>
                {_.find(SUPPORTED_CHAINS, (x) => x.id === activeChainId)?.name}
              </Text>
            </>
          ) : (
            <WarningTwoIcon />
          )}
          <ChevronDownIcon justifyContent={"center"} />
        </HStack>
      </MenuButton>
      <MenuList borderRadius="xl" zIndex={5}>
        <MenuGroup borderRadius="none">
          {Array.from(SUPPORTED_CHAINS).map((chain, i) => {
            return (
              <ChainMenuItem
                key={i}
                activeChainId={activeChainId}
                targetNetwork={chain}
                activeConnector={activeConnector}
                toast={toast}
                toastIdRef={toastIdRef}
              />
            );
          })}
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};

export const ChainMenuItem = ({
  activeChainId,
  targetNetwork,
  activeConnector,
  toast,
  toastIdRef,
}: any) => {
  // TODO - this is somewhat duplicated in SwitchNetworkModal because it was
  // hard to use the "useSwitchNetwork" hook properly here without violating
  // the rule of hooks (no nested hooks)
  const { switchNetwork: switchAddNetwork } = useSwitchNetwork({
    chainId: targetNetwork?.id,
  });

  const isActiveChain = activeChainId === targetNetwork.id;

  if (!switchAddNetwork && !isActiveChain) {
    return null;
  }

  return (
    <MenuItem
      p="2"
      pl="5"
      cursor="pointer"
      _focus={{ bg: "gray.200" }}
      _hover={{ bg: "gray.200" }}
      fontWeight={isActiveChain ? 700 : 400}
      onClick={() => {
        if (!isActiveChain) {
          switchAddNetwork?.();
        }
      }}
    >
      <Center display="flex">
        <Image
          boxSize="20px"
          objectFit={"contain"}
          marginRight="8px"
          src={targetNetwork?.logo}
          alt="supported chain"
        />
        {targetNetwork?.name}
      </Center>
    </MenuItem>
  );
};
