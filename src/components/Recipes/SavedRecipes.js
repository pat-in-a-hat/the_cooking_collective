//this page to include:

//the saved recipes
//button to add new saved recipe
//modal that loads form where you can add recipe link and other information

//ultimately have a share button on the saved recipes
//this copies link to that recipe page

//Maybe this page is recipe list then you can click into each recipe?
//pull image piece and maybe a short description from other website?

//later, use open graph to create thumbnail links
//https://javascript.plainenglish.io/make-your-website-have-a-beautiful-thumbnail-link-preview-d610aba7e90e


import React from 'react'
//import { RecipeAPI } from '../../rest/RecipeAPI'
//import { useLoaderData } from 'react-router-dom';
import { Heading, Text, VStack, Box, StackDivider, Center, Button, useDisclosure } from '@chakra-ui/react'
import RecipeModal from './RecipeModal.js'



export default function RecipeList ({ recipes }) {

    return(
        <>
        {recipes.length ? (
            <VStack
            divider={<StackDivider bordercolor='gray.200' />}
            spacing={8}
            height={'100vh'}
            overflow={'auto'}
            >
                <Center>
                    {recipes.map((recipe) => {
                    
                        <Box key={recipe.id}>
                            {recipe.link}
                            {recipe.notes}
                            
                        </Box>
                    })}
                </Center>
            </VStack>
        ) : (
            <VStack>
                    <Heading>Looks like you need to get cooking...</Heading>
                    <Text>No recipes saved yet!</Text>
                    <RecipeModal/>
            </VStack>
        )
        }
        </>
    )

}