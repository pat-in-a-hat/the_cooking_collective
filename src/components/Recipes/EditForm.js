import React from 'react'
import { useState } from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Textarea,
    Input,
    Button,
    Box,
  } from '@chakra-ui/react'
//import {Form,} from 'react-router-dom'


export default function RecipeForm ({ onClose, updateRecipe, id, link, notes }) {

    //usestate hook to manage the input states
    const [inputs, setInputs] = useState({link:link, notes:notes})

    //this allows us to handle multiple form values, passing them to a state
    const handleChange = (event) => {
        const value = event.target.value;
        setInputs({...inputs, [event.target.name]: value})
    }

    //submits put request through recipe api
    const handleSubmit = (event) => {
        console.log('handling change')
        event.preventDefault()
        updateRecipe(inputs.link, inputs.notes, id)
    }

    //add isrequired stars later on https://chakra-ui.com/docs/components/form-control/usage
    //also look into using react router Form behavior here
    //right now html form with chakra formatting
    return(
        <>
        <form onSubmit={handleSubmit}>
            <FormControl>
                <FormLabel>Recipe Link:</FormLabel>
                <Input 
                    type='url' 
                    name='link' 
                    value={inputs.link}
                    onChange={handleChange}
                    placeholder='e.x. https://cooking.nytimes.com/recipes/1019793-one-pot-rice-and-beans'
                />
                <FormHelperText>This should be a url.</FormHelperText>
            

                <FormLabel>Recipe Notes:</FormLabel>
                <Textarea 
                    type='text' 
                    name='notes' 
                    value={inputs.notes} 
                    onChange={handleChange} 
                    placeholder='Enter your recipe notes here'
                />
            </FormControl>
            <Box mt='4' align='right'>
                <Button colorScheme='yellow' mr={3} type='submit'>Add Recipe</Button>
                <Button colorScheme='gray' onClick={onClose}>Close</Button>
            </Box>
            

        </form>
        </>
    )
}