import { Box, Flex, Select, Heading, Text, Center } from "@chakra-ui/react";
import { useState } from "react";
import useGetProjectsQuery from "../hooks/useGetProjectsQuery";
import type { Region } from "../store/useGlobeStore";
import useGlobeStore from "../store/useGlobeStore";

export const RegionMap: Map<string, { lat: number; lng: number }> = new Map([
  ["United Arab Emirates", { lat: 24.0, lng: 54.0 }],
  ["Nigeria", { lat: 9.0, lng: 8.0 }],
  ["China", { lat: 35.0, lng: 105.0 }],
  ["United States", { lat: 38.0, lng: -97.0 }],
  ["Canada", { lat: 60.0, lng: -95.0 }],
  ["Mexico", { lat: 23.0, lng: -102.0 }],
  ["Brazil", { lat: -10.0, lng: -55.0 }],
  ["Argentina", { lat: -34.0, lng: -64.0 }],
  ["Chile", { lat: -30.0, lng: -71.0 }],
  ["Peru", { lat: -10.0, lng: -76.0 }],
  ["Colombia", { lat: 4.0, lng: -72.0 }],
  ["Venezuela", { lat: 8.0, lng: -66.0 }],
  ["Ecuador", { lat: -2.0, lng: -77.5 }],
  ["India", { lat: 20.0, lng: 77.0 }],
  ["Indonesia", { lat: -5.0, lng: 120.0 }],
  ["Thailand", { lat: 15.0, lng: 100.0 }],
  ["Malaysia", { lat: 2.5, lng: 112.5 }],
  ["Philippines", { lat: 13.0, lng: 122.0 }],
  ["Vietnam", { lat: 16.0, lng: 106.0 }],
  ["Australia", { lat: -25.0, lng: 135.0 }],
]);

const SearchFilter = () => {
  const [region] = useState<Region | undefined>(undefined);
  const { setRegion } = useGlobeStore();
  const { data, isLoading, error } = useGetProjectsQuery();

  console.log("data", data);
  console.log("isLoading", isLoading);
  console.log("error", JSON.stringify(error));

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
      <Box display={"flex"} flexDirection="column">
        <Heading mx="4" mb={7}>
          Select a project
        </Heading>
        <Center>
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
      </Box>
      <Box>
        <Heading>Project Info</Heading>
        <Text>Vintage:</Text>
      </Box>
    </Flex>
  );
};

export default SearchFilter;
