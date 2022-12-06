import React from 'react'
import BackgroundVideo from './BackgroundVideo'
import Navbar from './Navbar.tsx'
import { Box, Heading, VStack } from '@chakra-ui/react'
import '../styling/homepagecss.css'

export default function Homepage (){
    
    return(
        <>
            <Box className='video-container'>
                <BackgroundVideo />
                <Box>
                    <VStack>
                        <Heading fontSize='50px' color='#F7FAFC' align='center' justify='center'>
                        Welcome to the Cooking Collective
                        </Heading>
                    </VStack>
                </Box>
            </Box>
        </>
    )
}


//plan for this page:

//page with cooking video that loads on home screen
//perhaps simple description of what the project is
//chakra for clean simple UI/UX, page designs
//navigation to the saved recipes page

//later, change font to 'Playfair Display Bold Italic'
//need to set font family to do this