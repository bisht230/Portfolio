import {
  Box,
  Button,
  Circle,
  Flex,
  Image,
  Stack,
  Text,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { motion } from "framer-motion";
const Header = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const { isNotSmallerScreen } = useMediaQuery("(min-width:768px)");
  return (
    <Stack>
      <Circle
        position="absolute"
        bg="blue.100"
        opacity="0.1"
        w="200px"
        h="200px"
        alignSelf="flex-end"
      />
      <Image
        alignSelf="flex-end"
        mt={isNotSmallerScreen ? "0" : "12"}
        mb={isNotSmallerScreen ? "0" : "12"}
        backgroundColor="transparent"
        borderRadius="full"
        boxShadow="lg"
        boxSize="195px"
        src="https://avatars.githubusercontent.com/u/87183069?v=4"
      />
      <motion.div animate={{ scale: 1 }} initial={{ scale: 0 }} transition={{ type: "tween", duration: 0.5 }}>
        <Flex
          direction={isNotSmallerScreen ? "row" : "column"}
          spacing="100px"
          padding={isNotSmallerScreen ? "27" : "0"}
          alignSelf="flex-start"
        >
          <Box mt={isNotSmallerScreen ? "0" : "-55"} alignSelf="flex-start">
            <Text fontSize="3xl" fontWeight="semibold">
              Hey, I am
            </Text>
            <Text
              fontSize={isNotSmallerScreen ? "4xl" : "3xl"}
              fontWeight="bold"
              bgGradient="linear(to-r , cyan.400 , blue.500 , purple.600)"
              bgClip="text"
            >
              Deepanshu Bisht
            </Text>
            <Text color={isDark ? "gray.200" : "gray.500"}>
            ● I am an Information Technology engineering student seeking opportunities for collaboration on web development projects.
              <Text color={isDark ? "gray.200" : "gray.500"}>
            ● I am a dedicated and enthusiastic learner, eager to work across technologies and domains.
              </Text>
              <Text color={isDark ? "gray.200" : "gray.500"}>
            ● I have a keen interest in exploring new technologies and utilizing them to solve real-world problems.
              </Text>
              <Text color={isDark ? "gray.200" : "gray.500"}>
            ●  In addition, I am passionate about mentoring and guiding others in their learning journey. lems.
              </Text>
            ●  Currently, I am focused on Full Stack Web Development and honing my skills in Data Structures and Algorithms.
            </Text>
            <Button
              mt="6"
              colorScheme="blue"
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1jt1H76xXBKZYnDPlNOFHUKWcX2A9nfD9/view?usp=sharing"
                );
              }}
            >
              My Resume
            </Button>
          </Box>
        </Flex>
      </motion.div>
    </Stack>
  );
};

export default Header;
