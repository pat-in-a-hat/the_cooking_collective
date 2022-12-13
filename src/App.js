import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
//import { loader as rootLoader } from './rest/RecipeAPI';
import { createBrowserRouter, RouterProvider,Route } from "react-router-dom";
import ErrorPage from "./components/Router/ErrorPage";
import RecipeList from "./components/Recipes/RecipeList";
import Homepage from './components/Home/Homepage';
import MainRouter from './components/Router/Main';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRouter />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/Homepage',
        element: <Homepage />
      },
      {
        path: '/Recipes',
        element: <RecipeList />
      }
    ]
  },
]);

function App() {
  return (
    <div className='app'>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </div>
  );
}

export default App;
