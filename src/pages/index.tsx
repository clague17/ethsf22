import { Center, Box } from "@chakra-ui/react";
import { type NextPage } from "next";
import Link from "next/link";
import GlobeComponent from "../components/GlobeComponent";
import { MainPanel } from "../components/MainPanel";
import Navbar from "../components/nav/Navbar";

import styles from "./index.module.css";

const Home: NextPage = () => {
  return (
    <Box>
      <GlobeComponent />
      <Center>
        <Navbar />
      </Center>
      <Box display="flex" bgColor="black" justifyContent={"space-between"}>
        <MainPanel />
      </Box>
    </Box>
  );
};

export default Home;
