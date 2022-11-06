import { Box, Button, Center, Container, Heading, Stack, Text } from "@chakra-ui/react";
import type { AddressEmissionsResult } from "ethereum-emissions-calculator";
import * as React from "react";
import useEmissionsStore from "../store/useEmissionsStore";
import { ellipseAddress } from "../utils/web3";
import Checkout from "./Checkout";
import { steps } from "./data";
import FootprintModal from "./FootprintModal";
import SearchFilter from "./SearchFilter";
import { Step } from "./Step";
import { useStep } from "./useStep";

const StepMap = new Map<number, JSX.Element>([
  [0, <FootprintModal key={0} />],
  [1, <SearchFilter key={1} />],
  [2, <Checkout key={2} />],
]);

export const MainPanel = () => {
  const [currentStep, { setStep }] = useStep({ maxStep: steps.length, initialStep: 0 });
  const { emissions } = useEmissionsStore();
  return (
    <Box
      position="absolute"
      top="50vh"
      left="20%"
      bgColor="gray.800"
      boxShadow={"0px 5px 10px 10px rgb(72 187 120 / 43%)"}
      opacity={0.9}
      borderRadius={"xl"}
      width="60%"
    >
      <Container py={{ base: "4", md: "8" }} minWidth="100%" maxHeight="10%">
        <>
          <Stack spacing="0" direction={{ base: "column", md: "row" }}>
            {steps.map((step, id) => (
              <Step
                key={id}
                cursor="pointer"
                description={step.description}
                isActive={currentStep === id}
                isCompleted={currentStep > id}
                isFirstStep={id === 0}
                isLastStep={steps.length === id + 1}
              />
            ))}
          </Stack>
          {emissions.done && (
            <Box margin="0 auto" maxWidth="80%" mt={2}>
              <Text color="white" fontSize="md">
                Wallet: <Text as="span">{ellipseAddress(emissions.wallet)}</Text> {" || "}
                Emissions:{" "}
                <Text as="span" color="red.400">
                  {emissions.tCO2}
                </Text>{" "}
                (tCO2)
              </Text>
            </Box>
          )}
          <Box minWidth="100%">{StepMap.get(currentStep)}</Box>
          <Box
            display="flex"
            maxWidth="80%"
            margin="0 auto"
            justifyContent="space-between"
          >
            <Button
              display={currentStep > 0 ? "flex" : "hidden"}
              justifySelf="flex-start"
              onClick={() => (currentStep > 0 ? setStep(currentStep - 1) : null)}
            >
              Back
            </Button>
            <Heading color="white" fontSize="xl" pb={4}>
              Let&apos;s fix it together 🌱
            </Heading>
            <Button
              bg="green.400"
              justifySelf="flex-end"
              onClick={() => setStep(currentStep + 1)}
            >
              Next
            </Button>
          </Box>
        </>
      </Container>
    </Box>
  );
};
