import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Box } from "@chakra-ui/react";
import useWindowSize from "../hooks/useWindowSize";
const Globe = dynamic(import("react-globe.gl"), { ssr: false });

function GlobeComponent() {
  // support rendering markers with simple data
  const initMarkers = [
    {
      id: "marker1",
      city: "Singapore",
      color: "red",
      coordinates: [1.3521, 103.8198],
      value: 50,
    },
    {
      id: "marker2",
      city: "New York",
      color: "blue",
      coordinates: [40.73061, -73.935242],
      value: 25,
    },
    {
      id: "marker3",
      city: "San Francisco",
      color: "orange",
      coordinates: [37.773972, -122.431297],
      value: 35,
    },
    {
      id: "marker4",
      city: "Beijing",
      color: "gold",
      coordinates: [39.9042, 116.4074],
      value: 135,
    },
    {
      id: "marker5",
      city: "London",
      color: "green",
      coordinates: [51.5074, 0.1278],
      value: 80,
    },
    {
      id: "marker6",
      city: "Los Angeles",
      color: "gold",
      coordinates: [29.7604, -95.3698],
      value: 54,
    },
  ];

  const [globe, setGlobe] = useState();
  const [markers, setMarkers] = useState(initMarkers);

  const windowSize = useWindowSize();
  console.log(globe); // captured globe instance with API methods

  // simple component usage
  return (
    <Box position="absolute" w="100%" height="100%" zIndex={"-1"}>
      <Globe
        width={windowSize.width}
        height={windowSize.height}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
        pointsData={markers}
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
      />
    </Box>
  );
}

export default GlobeComponent;
