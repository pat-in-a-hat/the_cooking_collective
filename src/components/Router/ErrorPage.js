import React from 'react'
import { useRouteError } from "react-router-dom";
import { Heading, Text, VStack } from '@chakra-ui/react'
import '../../styling/ErrorPage.css'

//error page for react router. any errors are routed here
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className='error-page'>
            <VStack>
                <Heading>Whoops!</Heading>
                <Text>Looks like no one is in the kitchen...</Text>
                <i>{error.statusText || error.message}</i>
            </VStack>
    </div>
  );
}
