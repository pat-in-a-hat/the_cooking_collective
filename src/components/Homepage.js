import React from 'react'
import BackgroundVideo from './BackgroundVideo'
import Navbar from './Navbar.tsx'
import { Flex, Box, Heading, VStack, StackDivider } from '@chakra-ui/react'
import '../styling/homepagecss.css'
import Title from './Title'

export default function Homepage (){
    

    //for vstack 
    /*divider={<StackDivider borderColor='black' />}
    spacing = {4}
    align='stretch'
    */
    return(
        <>
        <Navbar />
        <BackgroundVideo />
        <VStack>
            <Box mt='100px'>
                <Title />
            </Box>
            <Box>
                
            </Box>
        </VStack>
        
        
        </>
    )
}


//plan for this page:

//page with cooking video that loads on home screen
//perhaps simple description of what the project is
//chakra for clean simple UI/UX, page designs
//navigation to the saved recipes page

