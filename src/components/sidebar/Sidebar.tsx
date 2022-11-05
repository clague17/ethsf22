import { Icon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Progress,
  Stack,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import {
  FiBarChart2,
  FiBookmark,
  FiCheckSquare,
  FiHelpCircle,
  FiHome,
  FiSearch,
  FiSettings,
  FiUsers,
} from "react-icons/fi";
import { NavButton } from "./NavButton";
import { UserProfile } from "./UserProfile";

export const App = () => (
  <Flex as="section" minH="100vh" bg="bg-canvas">
    <Flex
      flex="1"
      bg="bg-accent"
      color="on-accent"
      maxW={{ base: "full", sm: "xs" }}
      py={{ base: "6", sm: "8" }}
      px={{ base: "4", sm: "6" }}
    >
      <Stack justify="space-between" spacing="1">
        <Stack spacing={{ base: "5", sm: "6" }} shouldWrapChildren>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon as={FiSearch} color="on-accent" boxSize="5" />
            </InputLeftElement>
            <Input placeholder="Search" variant="filled" colorScheme="blue" />
          </InputGroup>
          <Stack spacing="1">
            <NavButton label="Home" icon={FiHome} />
            <NavButton
              label="Dashboard"
              icon={FiBarChart2}
              aria-current="page"
            />
            <NavButton label="Tasks" icon={FiCheckSquare} />
            <NavButton label="Bookmarks" icon={FiBookmark} />
            <NavButton label="Users" icon={FiUsers} />
          </Stack>
        </Stack>
        <Stack spacing={{ base: "5", sm: "6" }}>
          <Stack spacing="1">
            <NavButton label="Help" icon={FiHelpCircle} />
            <NavButton label="Settings" icon={FiSettings} />
          </Stack>
          <Box bg="bg-accent-subtle" px="4" py="5" borderRadius="lg">
            <Stack spacing="4">
              <Stack spacing="1">
                <Text fontSize="sm" fontWeight="medium">
                  Almost there
                </Text>
                <Text fontSize="sm" color="on-accent-muted">
                  Fill in some more information about you and your person.
                </Text>
              </Stack>
              <Progress
                value={80}
                size="sm"
                variant="on-accent"
                aria-label="Profile Update Progress"
              />
              <HStack spacing="3">
                <Button
                  variant="link-on-accent"
                  size="sm"
                  color="on-accent-muted"
                >
                  Dismiss
                </Button>
                <Button variant="link-on-accent" size="sm">
                  Update profile
                </Button>
              </HStack>
            </Stack>
          </Box>
          <Divider borderColor="bg-accent-subtle" />
          <UserProfile
            name="Christoph Winston"
            image="https://tinyurl.com/yhkm2ek8"
            email="chris@chakra-ui.com"
          />
        </Stack>
      </Stack>
    </Flex>
  </Flex>
);
