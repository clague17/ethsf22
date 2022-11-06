import { Box, Flex, HStack, Heading } from "@chakra-ui/react";
import ConnectWalletButton from "../ConnectWalletButton";

const Navbar: React.FC = () => {
  return (
    <Flex
      color="white"
      my={{ base: 8 }}
      py={{ base: 2 }}
      px={{ base: 4 }}
      boxShadow={"0px 5px 10px 10px rgb(72 187 120 / 43%)"}
      backgroundColor="gray.800"
      borderRadius={"xl"}
    >
      <HStack>
        <Heading px="50px">mundo</Heading>
        <ConnectWalletButton />
      </HStack>
    </Flex>
  );
};

export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export default Navbar;
