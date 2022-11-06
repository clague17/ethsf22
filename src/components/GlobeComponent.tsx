import React from "react";
import dynamic from "next/dynamic";
import { Box } from "@chakra-ui/react";
import useWindowSize from "../hooks/useWindowSize";
import type { Region } from "../store/useGlobeStore";
import useGlobeStore from "../store/useGlobeStore";
import useGetProjectsQuery from "../hooks/useGetProjectsQuery";
const Globe = dynamic(import("react-globe.gl"), { ssr: false });

function GlobeComponent() {
  // support rendering markers with simple data
  const region = useGlobeStore((state) => state.region);

  const { data, isLoading, error } = useGetProjectsQuery(region?.name);

  data?.map((data: any) => {
    return {
      name: data.regionName,
      lat: data.regionLat,
      lng: data.regionLng,
    };
  });

  const windowSize = useWindowSize();

  // simple component usage
  return (
    <Box position="absolute" top="0" zIndex={"-1"}>
      <Globe
        width={windowSize.width}
        height={windowSize.height}
        globeImageUrl="globe-texture.jpeg"
        pointsData={[region]}
        pointLabel={(point) => (point as Region).name}
        pointLat={(point) => (point as Region).lat}
        pointLng={(point) => (point as Region).lng}
        pointAltitude={() => 0.1}
        pointsTransitionDuration={5000}
        backgroundImageUrl="bg.png"
      />
    </Box>
  );
}

export default GlobeComponent;
