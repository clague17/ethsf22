import { Flex, HStack, Heading, Text } from "@chakra-ui/react";

const Navbar: React.FC = () => {
  return (
    <Flex
      color="white"
      my={{ base: 8 }}
      py={{ base: 2 }}
      px={{ base: 4 }}
      boxShadow={"0px 2px 10px 8px rgb(72 187 120 / 43%)"}
      flexDirection={"column"}
      mx="20%"
      maxWidth="70%"
      bgColor="gray.800"
      opacity={0.9}
      borderRadius={"xl"}
    >
      <HStack display="flex" flexDir={"column"}>
        <Heading margin="0 auto">mundo</Heading>
        <Text fontSize="xl">
          Measure your onchain footprint {"->"} Retire carbon from{" "}
          <Text as="span" fontWeight={"bold"}>
            any
          </Text>{" "}
          chain {"->"} Heal the mundo.
        </Text>
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
