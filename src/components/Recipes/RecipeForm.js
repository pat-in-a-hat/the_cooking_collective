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

//this form is meant for the recipe creation modal. 
//need to break both forms down further into base components at some point

export default function RecipeForm ({ onClose, addRecipe }) {

    //usestate hook to handle input state
    const [inputs, setInputs] = useState({link:'', notes:''})

    //this allows us to handle multiple form values, passing them to a state
    const handleChange = (event) => {
        const value = event.target.value;
        setInputs({...inputs, [event.target.name]: value})
    }

    //pushes new entry to mockapi via recipe api component
    const handleSubmit = (event) => {
        console.log('handling submit')
        event.preventDefault()
        addRecipe(inputs.link,inputs.notes)
    }

    //add isrequired star later on https://chakra-ui.com/docs/components/form-control/usage
    //this form is for the new recipe modal and uses chakra styling
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

//<Button colorScheme='yellow' mr={3} onClick={() => console.log('saved')}>Add Recipe</Button>
//https://www.w3schools.com/react/react_forms.asp