import { Box, Button, Circle, Flex, Image, Stack, Text, useColorMode, useMediaQuery } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  const {colorMode} = useColorMode();
  const isDark = colorMode === 'dark'
  const {isNotSmallerScreen} = useMediaQuery("(min-width:600px)")  
  return (
     <Stack>
        <Circle position="absolute" bg="blue.100" opacity="0.1" w="200px" h="200px" alignSelf="flex-end" />
        <Image 
             alignSelf="flex-end"
             mt = {isNotSmallerScreen ? "0" : "12"}
             mb = {isNotSmallerScreen ? "0" : "12"}
             backgroundColor="transparent"
             borderRadius="full"
             boxShadow ="lg"
             boxSize="195px"
             src="https://avatars.githubusercontent.com/u/87183069?v=4" 
             />
        <Flex direction={isNotSmallerScreen ? "row" : "column"} spacing="200px" padding={isNotSmallerScreen ? "32" : "0"} alignSelf="flex-start">
             <Box mt={isNotSmallerScreen ? "0" : "-50"} alignSelf="flex-start">
                <Text fontSize="3xl" fontWeight="semibold" >
                    Hey, I am
                </Text>
                <Text fontSize={isNotSmallerScreen ? "4xl" : "3xl"} fontWeight="bold" bgGradient="linear(to-r , cyan.400 , blue.500 , purple.600)" bgClip="text">
                    Deepanshu Bisht
                </Text>
                <Text color={isDark ? "gray.200" : "gray.500"}>I am pursuing engineering in Information Technology🎓
                <Text color={isDark ? "gray.200" : "gray.500"}>I'm a passionate learner who's always willing to learn and work across technologies and domains 💡.</Text>
                <Text color={isDark ? "gray.200" : "gray.500"}>I love to explore new technologies and leverage them to solve real-life problems ✨.</Text>
                <Text color={isDark ? "gray.200" : "gray.500"}>Apart from that I also love to guide and mentor newbies 👨🏻‍💻.</Text>
                I'm currently into Full Stack Web Development 🕸️ and working on my Data Structures and Algorithms 🤓 </Text>
                <Button mt="6" colorScheme="blue" onClick={() => {
                    window.open("https://drive.google.com/file/d/1jt1H76xXBKZYnDPlNOFHUKWcX2A9nfD9/view?usp=sharing")
                }}>My Resume</Button>
             </Box>
        </Flex>
     </Stack>
  )
}

export default Header