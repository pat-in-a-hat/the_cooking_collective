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
import { Heading, Text, VStack, Box, StackDivider, Center, Button, Flex, Spacer, useDisclosure, Divider } from '@chakra-ui/react'
import RecipeModal from './RecipeModal.js'
import '../../styling/SavedRecipes.css'



export default function SavedRecipes ({ recipes, deleteRecipe, addRecipe, updateRecipe }) {

    console.log(recipes)
    const recipesArray = [...recipes]
    console.log(recipesArray)
    console.log(recipesArray[0])
    console.log(recipesArray[0].id)


    return(
        <div>
        {(recipesArray.length > 0) ? (
            <VStack
            divider={<StackDivider bordercolor='gray.200' />}
            spacing={8}
            height={'100vh'}
            overflow={'auto'}
            >
                <RecipeModal addRecipe={addRecipe}/>
                
                {recipesArray.map((recipe) => (
                <Box 
                key={recipe.id}
                borderWidth='1px'
                borderRadius='md'
                >
                    <Box p='6'>
                        <Box mt='1'>
                            <Heading size='md'>Link</Heading>
                            <Divider />
                            <Box mt='2' mb='5'>
                                <Box
                                color='blue'
                                fontWeight='semibold'
                                fontSize='md'
                                noOfLines={2}
                                >
                                <a href={recipe.link} target='_blank'>{recipe.link.slice(8,)}</a>
                                </Box>
                            </Box>
                        </Box>
                        <Box mt='1'>
                            <Heading size='md'>Notes</Heading>
                            <Divider />
                            <Box mt='2'>
                                {recipe.notes}
                            </Box>
                        </Box>
                        <Box mt='5'>
                            <Center>
                                <Flex>
                                    <Button colorScheme='yellow'>Edit</Button>
                                </Flex>
                                <Spacer />
                                <Flex>
                                    <Button colorScheme='gray'>Delete</Button>
                                </Flex>
                            </Center>
                        </Box>
                    </Box>
                </Box>
            ))}
            </VStack>
        ) : (
            <VStack>
                    <Heading>Looks like you need to get cooking...</Heading>
                    <Text>No recipes saved yet!</Text>
                    <RecipeModal addRecipe={addRecipe}/>
            </VStack>
        )
        }
        </div>
    )

}

/*<VStack
            divider={<StackDivider bordercolor='gray.200' />}
            spacing={8}
            height={'100vh'}
            overflow={'auto'}
            ></VStack>*/

/*
{recipesArray.map((recipe) => 
                <Box key={recipe.id}>
                    {recipe.link}
                    {recipe.notes}
                </Box>
            )}
*/