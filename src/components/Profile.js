import {
  Box,
  Flex,
  Heading,
  Icon,
  Link,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { SiDiscord, SiTesla } from "react-icons/si";
import { BiTask } from "react-icons/bi";
import React from "react";
const Profile = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (
    <Flex
      direction="column"
      w="100%"
      // maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
    >
      <Box alignSelf="center">
        <Heading
          fontWeight="bold"
          color="cyan.400"
          fontSize="4xl"
          bgGradient="linear(to-l , cyan.700 , blue.300 , purple.400)"
          bgClip="text"
          fontFamily="monospace"
          mt="6"
        >
          PROJECTS
        </Heading>
      </Box>
      {/* Need to align it properly */}
      <Box
        // alignSelf={isNotSmallerScreen ? "" : "center"}
        // px={isNotSmallerScreen ? "355" : "25"}
        alignSelf="center"
        px="35"
        py="25"
        scrollBehavior="smooth"
        // alignItems="center"
      >
        <Flex
          className="flexCard"
          direction={isNotSmallerScreen ? "row" : "column"}
          mt={isNotSmallerScreen ? "0" : "2"}
        >
          <Link href="https://discord-clone-54c69.web.app/">
            <Flex
              rounded="xl"
              direction="column"
              mt={isNotSmallerScreen ? "0" : "2"}
              bg="gray.100"
              h="32vh"
              w="32vh"
              justify="flex-end"
            >
              <Icon
                as={SiDiscord}
                w="20"
                h="20"
                color="purple.500"
                p="4"
                mb="0"
              ></Icon>
              <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                Discord Clone
              </Text>
            </Flex>
          </Link>
          <Link href="https://weather-finder.cyclic.app/">
            <Flex
              rounded="xl"
              direction="column"
              mt={isNotSmallerScreen ? "0" : "2"}
              ml={isNotSmallerScreen ? "4" : "0"}
              bg="gray.100"
              h="32vh"
              w="32vh"
              justify="flex-end"
            >
              <Icon
                as={TiWeatherPartlySunny}
                w="20"
                h="20"
                color="black"
                p="4"
                mb="0"
              ></Icon>
              <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                Weather App
              </Text>
            </Flex>
          </Link>
          <Link href="https://github.com/bisht230/Task-Manager-API">
            <Flex
              rounded="xl"
              direction="column"
              mt={isNotSmallerScreen ? "0" : "2"}
              ml={isNotSmallerScreen ? "4" : "0"}
              bg="gray.100"
              h="32vh"
              w="32vh"
              justify="flex-end"
            >
              <Icon
                as={BiTask}
                w="20"
                h="20"
                color="yellow.500"
                p="4"
                mb="0"
              ></Icon>
              <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                Task Manager API
              </Text>
            </Flex>
          </Link>
          <Link href="https://dashing-blini-75f5a9.netlify.app/">
            <Flex
              rounded="xl"
              direction="column"
              mt={isNotSmallerScreen ? "0" : "2"}
              ml={isNotSmallerScreen ? "4" : "0"}
              bg="gray.100"
              h="32vh"
              w="32vh"
              justify="flex-end"
            >
              <Icon
                as={SiTesla}
                w="20"
                h="20"
                color="red.500"
                p="4"
                mb="0"
              ></Icon>
              <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                Tesla clone
              </Text>
            </Flex>
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Profile;
