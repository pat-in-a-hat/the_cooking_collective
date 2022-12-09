import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
//import Homepage from './components/Homepage'
//import BackgroundVideo from './components/BackgroundVideo';
import MainRouter from './components/Main';

function App() {
  return (
    <div className='app'>
      <ChakraProvider>
          <MainRouter />
      </ChakraProvider>
    </div>
  );
}

export default App;
