import { HStack, Icon, Link } from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import{SiLeetcode , SiCodechef , SiCodeforces , SiGeeksforgeeks} from "react-icons/si";

const Social = () => {
  return (
    <HStack spacing="25">
      <Link href="https://github.com/bisht230">
        <Icon as={FaGithub} boxSize="45">
        </Icon>
      </Link>
      <Link href="https://www.linkedin.com/in/deepanshu-bisht-661785210/">
        <Icon as={FaLinkedin} boxSize="45"></Icon>
      </Link>
      <Link href="">
        <Icon as={SiLeetcode} boxSize="45"></Icon>
      </Link>
      <Link href="">
        <Icon as={SiCodechef} boxSize="45"></Icon>
      </Link>
      <Link href="">
        <Icon as={SiCodeforces} boxSize="45"></Icon>
      </Link>
      <Link href="">
        <Icon as={SiGeeksforgeeks} boxSize="45"></Icon>
      </Link>
    </HStack>
  );
};

export default Social;
