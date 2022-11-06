import { Center, Box } from "@chakra-ui/react";
import { type NextPage } from "next";
import Link from "next/link";
import GlobeComponent from "../components/GlobeComponent";
import Navbar from "../components/nav/Navbar";
import SearchFilter from "../components/SearchFilter";

import styles from "./index.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Center>
        <Navbar />
      </Center>
      <GlobeComponent />
      <SearchFilter />
    </>
  );
};

export default Home;

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const TechnologyCard = ({ name, description, documentation }: TechnologyCardProps) => {
  return (
    <section className={styles.card}>
      <h2 className={styles.cardTitle}>{name}</h2>
      <p className={styles.cardDescription}>{description}</p>
      <Link
        className={styles.cardDocumentation}
        href={documentation}
        target="_blank"
        rel="noreferrer"
      >
        Documentation
      </Link>
    </section>
  );
};
