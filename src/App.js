import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Homepage from './components/Homepage'
import BackgroundVideo from './components/BackgroundVideo';

function App() {
  return (
    <>
    <ChakraProvider>
        <Homepage />
    </ChakraProvider>
    </>
  );
}

export default App;
