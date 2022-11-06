import { useQuery } from "@tanstack/react-query";
import { gql, request } from "graphql-request";
import { RegionMap } from "../components/SearchFilter";
const toucanSubgraph = "https://api.thegraph.com/subgraphs/name/toucanprotocol/matic";

const allProjectsForTCO2PoolQueryDocument = gql`
  query allProjectsForTCO2PoolQuery($poolAddress: String!) {
    pooledTCO2Tokens(where: { poolAddress: $poolAddress }) {
      token {
        name
        address
        projectVintage {
          id
          project {
            methodology
            standard
            region
          }
        }
      }
      amount
    }
  }
`;

const useGetProjectsQuery = (regionName?: string) => {
  return useQuery(
    ["projects"],
    async () =>
      request(toucanSubgraph, allProjectsForTCO2PoolQueryDocument, {
        poolAddress: "0x2f800db0fdb5223b3c3f354886d907a671414a7f",
      }),
    {
      select: (data) => {
        const cleanData = data.pooledTCO2Tokens
          .filter((t: any) =>
            Array.from(RegionMap.keys()).includes(t.token.projectVintage.project.region)
          )
          .map((t: any) => ({
            ...t,
            lat: RegionMap.get(t.token.projectVintage.project.region)?.lat,
            lng: RegionMap.get(t.token.projectVintage.project.region)?.lng,
            regionName: t.token.projectVintage.project.region,
          }));
        if (regionName) {
          return cleanData.filter((token: any, idx: number, self: any[]) => {
            if (token.regionName == regionName && self.indexOf(token) === idx) {
              return true;
            }
            return false;
          });
        }
        return cleanData;
      },
    }
  );
};

export default useGetProjectsQuery;
