import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Button,
  HStack,
  Center,
  Image,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import type { Chain } from "wagmi";
import type { VaultTokenPair } from "../utils/types";

export interface TokenSelectorProps {
  userAddress: string | undefined;
  activeChain: Chain | undefined;

  supportedTokens?: VaultTokenPair[];
  selectedTokenIndex: number;
  setSelectedTokenIndex(x: number): void;

  isOpen: boolean;
  onOpen(): void;
  onClose(): void;

  showLongTitle?: boolean;
}

export const TokenSelector = (props: TokenSelectorProps) => {
  const { activeChain, supportedTokens, selectedTokenIndex, setSelectedTokenIndex } =
    props;

  return (
    <Menu isLazy autoSelect={false}>
      <MenuButton
        py={3}
        px={3}
        as={Button}
        height="100%"
        color="black"
        transition="all 0.2s"
        borderRadius="xl"
        maxH="44px"
        backgroundColor={"gray.100"}
        _hover={activeChain ? { bg: "gray.700", textColor: "white" } : { bg: "gray.100" }}
        _expanded={
          activeChain ? { bg: "gray.700", textColor: "white" } : { bg: "gray.100" }
        }
        _focus={{ boxShadow: "outline" }}
        disabled={!activeChain}
      >
        <HStack spacing="0.4em">
          <Avatar
            boxSize="25px"
            background={"white"}
            src={supportedTokens?.[selectedTokenIndex]?.input.imgURL}
          />
          <Text>{supportedTokens?.[selectedTokenIndex]?.input.symbol}</Text>
          <ChevronDownIcon justifyContent={"center"} />
        </HStack>
      </MenuButton>
      <MenuList minW={"120px"} borderRadius="xl">
        <MenuGroup
          title={props.showLongTitle ? "Supported tokens" : ""}
          borderRadius="none"
        >
          {supportedTokens?.map((pair: VaultTokenPair, i: number) => {
            const isSelectedToken = i === selectedTokenIndex;
            return (
              <MenuItem
                key={i}
                cursor="pointer"
                bg="white"
                _focus={{ bg: "gray.200" }}
                _hover={{ bg: "gray.200" }}
                padding="auto"
                onClick={() => {
                  setSelectedTokenIndex(i);
                }}
                p="2"
                pl="5"
              >
                <Center display="flex" fontWeight={isSelectedToken ? 700 : 400}>
                  <Image
                    borderRadius={"full"}
                    boxSize="30px"
                    objectFit={"contain"}
                    marginRight="8px"
                    src={pair.input.imgURL ?? ""}
                    alt="supported token"
                  />
                  {pair.input.symbol}
                </Center>
              </MenuItem>
            );
          })}
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};
