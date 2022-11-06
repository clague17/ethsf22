import { Center, Box } from "@chakra-ui/react";
import { type NextPage } from "next";
import Link from "next/link";
import FootprintModal from "../components/FootprintModal";
import GlobeComponent from "../components/GlobeComponent";
import { MainPanel } from "../components/MainPanel";
import Navbar from "../components/nav/Navbar";
import SearchFilter from "../components/SearchFilter";

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
