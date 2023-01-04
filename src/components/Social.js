import { HStack, Icon } from '@chakra-ui/react'
import React from 'react'
import {FaMoon , FaSun , FaGithub , FaInstagram , FaLinkedin } from 'react-icons/fa';

const Social = () => {
  return (
    <HStack spacing="25">
        <Icon as={FaGithub} boxSize="45"></Icon>
        <Icon as={FaLinkedin} boxSize="45"></Icon>
        <Icon as={FaInstagram} boxSize="45"></Icon>
    </HStack>
  )
}

export default Social