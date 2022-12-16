import React from 'react'
import BackgroundVideo from './BackgroundVideo'
import Navbar from '../Navbar.js'
import { Flex, Box, Heading, VStack, StackDivider } from '@chakra-ui/react'
import Title from './Title'
import '../../styling/Homepage.css'

export default function Homepage (){
    

    //big plans to modernize and build this out further
    return(
        <>
        <div>
            <BackgroundVideo />
        </div>
        <div className='grid-frame'>
            <div className='contents-flex'>
                
                <VStack>
                    <Box mt='100px'>
                        <Title />
                    </Box>
                    <Box>
                        
                    </Box>
                </VStack>
            </div>
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
