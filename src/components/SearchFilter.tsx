import { Box, Flex, Select, Heading, VStack, Center } from "@chakra-ui/react";
import { useState } from "react";

type Region = {
  name: string;
  lat: number;
  long: number;
};

export const RegionMap: Map<string, { lat: number; long: number }> = new Map([
  ["United Arab Emirates", { lat: 24.0, long: 54.0 }],
  ["Nigeria", { lat: 9.0, long: 8.0 }],
  ["China", { lat: 35.0, long: 105.0 }],
  ["United States", { lat: 38.0, long: -97.0 }],
]);

const SearchFilter = () => {
  const [region, setRegion] = useState<Region | undefined>(undefined);
  console.log("region", region);
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
