import { Box, Flex, Select, Heading, Text, Center } from "@chakra-ui/react";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import useGetProjectsQuery from "../hooks/useGetProjectsQuery";
import type { Region } from "../store/useGlobeStore";
import useGlobeStore from "../store/useGlobeStore";
import { SuperToken, Token } from "../store/useTokenStore";

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
  const [localRegion, setLocalRegion] = useState<Region | undefined>(undefined);
  const [localToken, setLocalToken] = useState<SuperToken | undefined>(undefined);
  const { setRegion } = useGlobeStore();
  const { data: allProjects } = useGetProjectsQuery();

  return (
    <Flex
      flexDirection={"column"}
      color="white"
      maxWidth="30%"
      bgColor="gray.800"
      boxShadow={"0px 5px 10px 10px rgb(72 187 120 / 43%)"}
      opacity={0.9}
      borderRadius={"xl"}
      ml={10}
      p={8}
    >
      <Heading py={6}>Choose a project to retire</Heading>
      <Box>
        <Box display="flex">
          <Heading mx="4" mb={7} pr={8}>
            Select a Region
          </Heading>
          <Center>
            <Box>
              <Select
                placeholder="Select region"
                value={localRegion?.name}
                onChange={(e) => {
                  e.preventDefault();
                  const regionName = e.target.value;
                  const region = RegionMap.get(regionName);
                  if (region) {
                    setLocalRegion({ name: regionName, ...region });
                    setRegion({ name: regionName, ...region });
                  }
                }}
              >
                {allProjects?.map((token: any, idx: number) => {
                  return <option key={idx}>{token.regionName}</option>;
                })}
              </Select>
            </Box>
          </Center>
        </Box>
        <Box display="flex">
          <Heading mx="4" mb={7}>
            Select a Project
          </Heading>
          <Center>
            <Box>
              <Select
                placeholder="Select project"
                value={localToken?.name}
                onChange={(e) => {
                  e.preventDefault();
                  console.log("e.target selected", JSON.parse(e.target.value));
                  setLocalToken(JSON.parse(e.target.value));
                }}
              >
                {allProjects
                  ?.filter(
                    (t: any) =>
                      t.token.projectVintage.project.region === localRegion?.name
                  )
                  .map((t: any, idx: number) => {
                    return (
                      <option key={idx} value={JSON.stringify(t)}>
                        {t.token.name}
                      </option>
                    );
                  })}
              </Select>
            </Box>
          </Center>
        </Box>
        {localToken && (
          <Box display="flex" flexDir="column">
            <Heading mx="4" mb={7} fontSize="xl">
              Available credits to retire:{" "}
              <Text as="span" color="green.400">
                {ethers.utils.formatEther(localToken?.amount ?? 0)}
              </Text>
            </Heading>
            <Heading mx="4" mb={7} fontSize="xl">
              Project methodology:{" "}
              <Text as="span" color="green.400">
                {localToken?.token.projectVintage.project.methodology}
              </Text>
            </Heading>
          </Box>
        )}
      </Box>
    </Flex>
  );
};

export default SearchFilter;
