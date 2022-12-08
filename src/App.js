import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
//import Homepage from './components/Homepage'
//import BackgroundVideo from './components/BackgroundVideo';
import MainRouter from './components/Main';

function App() {
  return (
    <>
    <ChakraProvider>
        <MainRouter />
    </ChakraProvider>
    </>
  );
}

export default App;
