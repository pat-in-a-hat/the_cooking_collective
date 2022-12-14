import React from 'react'
import { useState } from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Textarea,
    Input,
  } from '@chakra-ui/react'
import {
    Form,
} from 'react-router-dom'


export default function RecipeForm ({ formRef, addRecipe}) {

    const [inputs, setInputs] = useState({link:'', notes:''})

    console.log(inputs.link)
    console.log(inputs.notes)

    //this allows us to handle multiple form values, passing them to a state
    const handleChange = (event) => {
        const link = event.target.link
        const notes = event.target.notes
        setInputs({link:link, notes:notes})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addRecipe(inputs)
    }

    const isError = inputs.link === ''

    //add is required star later on https://chakra-ui.com/docs/components/form-control/usage
    return(
        <>
        <Form method='post'>
            <FormControl isInvalid={isError}>
                <FormLabel>Recipe Link:</FormLabel>
                <Input 
                    type='text' 
                    name='recipeLink' 
                    value={inputs.link}
                    onChange={handleChange}
                    placeholder='e.x. https://cooking.nytimes.com/recipes/1019793-one-pot-rice-and-beans'
                />
                {!isError ? (
                    <FormHelperText>This should be a url.</FormHelperText>
                ) : (
                    <FormErrorMessage>Recipe link is required.</FormErrorMessage>
                )}

                <FormLabel>Recipe Notes:</FormLabel>
                <Textarea 
                    type='text' 
                    name='recipeNotes' 
                    value={inputs.notes} 
                    onChange={handleChange} 
                    placeholder='Enter your recipe notes here'
                />
            </FormControl>
            <button ref={formRef} type='submit' style={{display: 'none'}} />
        </Form>
        </>
    )
}

//<Button colorScheme='yellow' mr={3} onClick={() => console.log('saved')}>Add Recipe</Button>
//https://www.w3schools.com/react/react_forms.asp