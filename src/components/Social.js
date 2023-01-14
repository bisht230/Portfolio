import { Box, Flex, Heading, HStack, Icon, Link, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  SiLeetcode,
  SiCodechef,
  SiCodeforces,
  SiGeeksforgeeks,
} from "react-icons/si";

const Social = () => {
  return (
    <HStack spacing="25">
      <Link href="https://github.com/bisht230">
        <Icon as={FaGithub} boxSize="35"></Icon>
      </Link>
      <Link href="https://www.linkedin.com/in/deepanshu-bisht-661785210/">
        <Icon as={FaLinkedin} boxSize="35"></Icon>
      </Link>
      <Link href="https://leetcode.com/SuSpicious_07/">
        <Icon as={SiLeetcode} boxSize="35"></Icon>
      </Link>
      <Link href="https://www.codechef.com/users/deepanshu009">
        <Icon as={SiCodechef} boxSize="35"></Icon>
      </Link>
      <Link href="https://codeforces.com/profile/SuSpicious07">
        <Icon as={SiCodeforces} boxSize="35"></Icon>
      </Link>
      <Link href="https://auth.geeksforgeeks.org/user/bishtdeepanshu007/practice/">
        <Icon as={SiGeeksforgeeks} boxSize="35"></Icon>
      </Link>
    </HStack>
  );
};

export default Social;
