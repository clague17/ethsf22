import {
  BoxProps,
  Divider,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import * as React from "react";
import { StepCircle } from "./StepCircle";

interface StepProps extends BoxProps {
  title: string;
  description: string;
  isCompleted: boolean;
  isActive: boolean;
  isLastStep: boolean;
  isFirstStep: boolean;
}

export const Step = (props: StepProps) => {
  const { isActive, isCompleted, isLastStep, isFirstStep, description, ...stackProps } =
    props;

  const orientation = useBreakpointValue<"horizontal" | "vertical">({
    base: "vertical",
    md: "horizontal",
  });

  return (
    <Stack
      color="white"
      spacing="4"
      direction={{ base: "row", md: "column" }}
      flex="1"
      {...stackProps}
    >
      <Stack spacing="0" align="center" direction={{ base: "column", md: "row" }}>
        <Divider
          orientation={orientation}
          borderWidth="1px"
          borderColor={
            isFirstStep ? "transparent" : isCompleted || isActive ? "accent" : "inherit"
          }
        />
        <StepCircle isActive={isActive} isCompleted={isCompleted} />
        <Divider
          orientation={orientation}
          borderWidth="1px"
          borderColor={isCompleted ? "accent" : isLastStep ? "transparent" : "inherit"}
        />
      </Stack>
      <Stack spacing="0.5" align={{ base: "start", md: "center" }}>
        <Text color="muted">{description}</Text>
      </Stack>
    </Stack>
  );
};
