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
  const projectRegions = new Set([]);

  return (
    <Flex
      flexDirection={"column"}
      color="white"
      marginLeft="20"
      maxWidth="80%"
      bgColor="gray.800"
      opacity={0.9}
      borderRadius={"xl"}
    >
      <Heading fontSize="2xl">Explore projects to retire</Heading>
      <Box display="flex" justifyContent={"space-between"}>
        <Box display="flex" flexDir={"column"} maxWidth="50%">
          <Box display="flex" flexDir={"column"}>
            <Center justifyContent={"space-between"}>
              <Heading fontSize="xl">Select a Region</Heading>
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
                  {allProjects
                    ?.filter((token: any) => {
                      if (!projectRegions.has(token.regionName)) {
                        projectRegions.add(token.regionName);
                        return true;
                      }
                      return false;
                    })
                    .map((token: any, idx: number) => {
                      return <option key={idx}>{token.regionName}</option>;
                    })}
                </Select>
              </Box>
            </Center>
          </Box>
          <Box display="flex">
            <Heading mx="4" mb={7} fontSize="xl">
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
        </Box>
        {localToken && (
          <Box display="flex" flexDir="column">
            <Heading fontSize="xl">
              Available credits to retire:{" "}
              <Text as="span" color="green.400">
                {ethers.utils.formatEther(localToken?.amount ?? 0)}
              </Text>
            </Heading>
            <Heading fontSize="xl">
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
