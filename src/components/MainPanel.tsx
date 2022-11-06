import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import type { AddressEmissionsResult } from "ethereum-emissions-calculator";
import * as React from "react";
import useEmissionsStore from "../store/useEmissionsStore";
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
  const [currentStep, { setStep }] = useStep({
    maxStep: steps.length,
    initialStep: 0,
  });
  const { emissions } = useEmissionsStore();
  return (
    <Box
      position="absolute"
      top="60vh"
      left="20%"
      bgColor="gray.800"
      boxShadow={"0px 5px 10px 10px rgb(72 187 120 / 43%)"}
      opacity={0.9}
      borderRadius={"xl"}
      width="60%"
    >
      <Container py={{ base: "4", md: "8" }} minWidth="100%" maxHeight="20%">
        <>
          <Stack spacing="0" direction={{ base: "column", md: "row" }}>
            {steps.map((step, id) => (
              <Step
                key={id}
                cursor="pointer"
                title={step.title}
                description={step.description}
                isActive={currentStep === id}
                isCompleted={currentStep > id}
                isFirstStep={id === 0}
                isLastStep={steps.length === id + 1}
              />
            ))}
          </Stack>
          {emissions.done && (
            <Text color="white" fontSize="lg">
              Your emissions {emissions.tCO2}
            </Text>
          )}
          <Box minWidth="100%">{StepMap.get(currentStep)}</Box>
          <Box display="flex" flexDir={"column"} maxWidth="20%" margin="0 auto">
            <Heading color="white" fontSize="xl">
              Do something about it
            </Heading>
            <Box margin="0 auto" display="flex" alignItems={"space-between"}>
              <Button
                justifySelf="flex-start"
                onClick={() => setStep(currentStep - 1)}
              >
                Back
              </Button>
              <Button
                justifySelf="flex-end"
                onClick={() => setStep(currentStep + 1)}
              >
                Next
              </Button>
            </Box>
          </Box>
        </>
      </Container>
    </Box>
  );
};
