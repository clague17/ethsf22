import { Box, Flex, Select, Heading, VStack, Center } from "@chakra-ui/react";
import { useState } from "react";
import type { Region } from "../store/useGlobeStore";
import useGlobeStore from "../store/useGlobeStore";

export const RegionMap: Map<string, { lat: number; lng: number }> = new Map([
  ["United Arab Emirates", { lat: 24.0, lng: 54.0 }],
  ["Nigeria", { lat: 9.0, lng: 8.0 }],
  ["China", { lat: 35.0, lng: 105.0 }],
  ["United States", { lat: 38.0, lng: -97.0 }],
]);

const SearchFilter = () => {
  const [region] = useState<Region | undefined>(undefined);
  const { setRegion } = useGlobeStore();

  return (
    <Flex
      color="white"
      maxWidth="25%"
      py={{ base: 2 }}
      mx={{ base: 4 }}
      justify={{ base: "space-between" }}
      backgroundColor="gray.800"
      borderRadius={"xl"}
    >
      <VStack>
        <Center>
          <Heading>Project Settings</Heading>
          <Box>
            <Select
              placeholder="Select region"
              value={region?.name}
              onChange={(e) => {
                const regionName = e.target.value;
                const region = RegionMap.get(regionName);
                if (region) {
                  setRegion({ name: regionName, ...region });
                }
              }}
            >
              <option>United Arab Emirates</option>
              <option>Nigeria</option>
              <option>China</option>
              <option>United States</option>
            </Select>
          </Box>
        </Center>
      </VStack>
    </Flex>
  );
};

export default SearchFilter;
