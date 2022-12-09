import React from 'react'
import BackgroundVideo from './BackgroundVideo'
import Navbar from '../Navbar.js'
import { Flex, Box, Heading, VStack, StackDivider } from '@chakra-ui/react'
import Title from './Title'

export default function Homepage (){
    

    //for vstack 
    /*divider={<StackDivider borderColor='black' />}
    spacing = {4}
    align='stretch'
    */
    return(
        <>
        <div>
        <BackgroundVideo />
        <Title />
        <VStack>
            <Box mt='100px'>
                <Title />
            </Box>
            <Box>
                
            </Box>
        </VStack>
        </div>
        
        
        
        </>
    )
}


//plan for this page:

//page with cooking video that loads on home screen
//perhaps simple description of what the project is
//chakra for clean simple UI/UX, page designs
//navigation to the saved recipes page

//make mobile friendly by having a use state hook that changes the css based on the state
//https://itnext.io/3-ways-to-implement-responsive-design-in-your-react-app-bcb6ee7eb424
