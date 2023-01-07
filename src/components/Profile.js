import { Box, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
const Profile = () => {
  const { isNotSmallerScreen } = useMediaQuery("(min-width:600px)");
  return (
    <Flex
      direction={isNotSmallerScreen ? "row" : "column"}
      w="100%"
      maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
    >
      <Box alignSelf="center" px="32" py="25">
        <Heading
          fontWeight="bold"
          color="cyan.400"
          fontSize="4xl"
          bgGradient="linear(to-l , cyan.700 , blue.300 , purple.400)"
          bgClip="text"
          fontFamily="monospace"
        >
          PROJECTS
        </Heading>
      </Box>
      <Box alignSelf="center" px="32" py="25">
        </Box>
    </Flex>
  );
};

export default Profile;
