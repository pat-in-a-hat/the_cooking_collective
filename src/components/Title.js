import React from 'react';
import { Container, Box, Heading, Text } from '@chakra-ui/react'


//mt='-200px'
//later, change font to 'Playfair Display Bold Italic'
//need to set font family to do this

// align='center' justify='center'
export default function Title() {
    return (
        <Box>
            <Container centerContent>
                <Heading fontSize='50px' color='#F7FAFC' align='center' justify='center'>
                Welcome to the Cooking Collective
                </Heading>
            </Container>
        </Box>
    )
}