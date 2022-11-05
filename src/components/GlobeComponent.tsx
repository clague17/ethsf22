import React from "react";
import dynamic from "next/dynamic";
import { Box } from "@chakra-ui/react";
import useWindowSize from "../hooks/useWindowSize";
import useGlobeStore, { Region } from "../store/useGlobeStore";
const Globe = dynamic(import("react-globe.gl"), { ssr: false });

function GlobeComponent() {
  // support rendering markers with simple data
  const region = useGlobeStore((state) => state.region);
  // const initMarkers = [
  //   {
  //     id: "marker1",
  //     city: "Singapore",
  //     color: "red",
  //     coordinates: [1.3521, 103.8198],
  //     value: 50,
  //   },
  //   {
  //     id: "marker2",
  //     city: "New York",
  //     color: "blue",
  //     coordinates: [40.73061, -73.935242],
  //     value: 25,
  //   },
  //   {
  //     id: "marker3",
  //     city: "San Francisco",
  //     color: "orange",
  //     coordinates: [37.773972, -122.431297],
  //     value: 35,
  //   },
  //   {
  //     id: "marker4",
  //     city: "Beijing",
  //     color: "gold",
  //     coordinates: [39.9042, 116.4074],
  //     value: 135,
  //   },
  //   {
  //     id: "marker5",
  //     city: "London",
  //     color: "green",
  //     coordinates: [51.5074, 0.1278],
  //     value: 80,
  //   },
  //   {
  //     id: "marker6",
  //     city: "Los Angeles",
  //     color: "gold",
  //     coordinates: [29.7604, -95.3698],
  //     value: 54,
  //   },
  // ];

  const windowSize = useWindowSize();
  console.log(region); // captured globe instance with API methods

  // simple component usage
  return (
    <Box position="absolute" w="100%" height="100%" zIndex={"-1"}>
      <Globe
        width={windowSize.width}
        height={windowSize.height}
        globeImageUrl="globe-texture.jpeg"
        ringsData={[region]}
        ringLat={(region) => (region as Region).lat}
        ringLng={(region) => (region as Region).lng}
        ringPropagationSpeed={4}
        ringColor={() => "green"}
        ringMaxRadius={10}
        backgroundImageUrl="bg.png"
      />
    </Box>
  );
}

export default GlobeComponent;
