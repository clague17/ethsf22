import { useQuery } from "@tanstack/react-query";
import { gql, request } from "graphql-request";
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

const useGetProjectsQuery = () => {
  return useQuery(["projects"], async () =>
    request(toucanSubgraph, allProjectsForTCO2PoolQueryDocument, {
      poolAddress: "0x2f800db0fdb5223b3c3f354886d907a671414a7f",
    })
  );
};

export default useGetProjectsQuery;
