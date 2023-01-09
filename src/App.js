import { Flex, Heading, IconButton, Spacer, useColorMode, VStack } from '@chakra-ui/react';
import { FaMoon, FaSun, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Header from './components/Header';
import Profile from './components/Profile';
import Social from './components/Social';

function App() {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === "dark";
  return (
    <div className="App">
      <VStack p="5">
        <Flex w="100%">
          <Heading ml="1" fontSize="semibold" size="md" color="cyan.400">
            @Deepanshu_Bisht
          </Heading>
          <Spacer></Spacer>
          <IconButton ml="2" icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>
        </Flex>
        <Header />
        <Profile />
        <Social />
      </VStack>
    </div>
  );
}

export default App;
