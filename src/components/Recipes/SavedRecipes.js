import React from 'react'
//import { RecipeAPI } from '../../rest/RecipeAPI'
//import { useLoaderData } from 'react-router-dom';
import { Heading, Text, VStack, Box, StackDivider, Center, Button, Flex, Spacer, Divider } from '@chakra-ui/react'
import RecipeModal from './RecipeModal.js'
import EditModal from './EditModal'
import '../../styling/SavedRecipes.css'



export default function SavedRecipes ({ recipes, deleteRecipe, addRecipe, updateRecipe }) {

    //taking a shallow copy of the fetched recipes array to prevent potential unwanted alterations
    const recipesArray = [...recipes]

    //we then have a layout with
    //the new recipe modal
    //mapped recipe array if it is fetched OR new recipe modal button to add new recipes
    //each recipe is formatted into a basic Chakra box with an edit button and delete button
    //the edit button pulls up an edit modal and loads the state into it
    //the delete button sends a delete request through recipeAPI to mockapi to delete and then refetch
    return(
        <div>
        {(recipesArray.length > 0) ? (
            <VStack
            divider={<StackDivider bordercolor='gray.200' />}
            spacing={8}
            height={'100vh'}
            overflow={'auto'}
            >
                <Box
                borderWidth='1px'
                borderRadius='md'
                >
                    <Box p='6'>
                        <Box mt='1'>
                            <Heading>Welcome to Cooking Collective!</Heading>
                            <Divider />
                            <Box mt='4'>
                                Add your own recipe links and relevent notes to contribute to the project!
                            </Box>
                            <Center mt='4'>
                                <RecipeModal addRecipe={addRecipe}/>
                            </Center>
                        </Box>
                    </Box>

                </Box>
                
                
                {recipesArray.map((recipe) => (
                <Box 
                key={recipe.id}
                borderWidth='1px'
                borderRadius='md'
                width={'80%'}
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
                                    <EditModal
                                        updateRecipe={updateRecipe} 
                                        id={recipe.id} 
                                        link={recipe.link} 
                                        notes={recipe.notes}/>
                                </Flex>
                                <Spacer />
                                <Flex>
                                    <Button colorScheme='gray' onClick={() => deleteRecipe(recipe.id)}>Delete</Button>
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

//design and future plan notes

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
