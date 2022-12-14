import React from 'react'
import { useState } from 'react'
import { formRef } from './RecipeModal'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Textarea,
    Input,
    Button,
  } from '@chakra-ui/react'
import {
    Form,
} from 'react-router-dom'


export default function RecipeForm ({ formRef, addRecipe}) {

    const [inputs, setInputs] = useState({link:'', notes:''})

    //this allows us to handle multiple form values, passing them to a state
    const handleChange = (event) => {
        const value = event.target.value;
        setInputs({...inputs, [event.target.name]: value})
    }

    const handleSubmit = (event) => {
        console.log('handling submit')
        event.preventDefault()
        addRecipe(inputs.link,inputs.notes)
    }

    //add is required star later on https://chakra-ui.com/docs/components/form-control/usage
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
            <Button colorScheme='yellow' mr={3} type='submit'>Add Recipe</Button>
            <button ref={formRef} type='submit' style={{display: 'none'}} />
        </form>
        </>
    )
}

//<Button colorScheme='yellow' mr={3} onClick={() => console.log('saved')}>Add Recipe</Button>
//https://www.w3schools.com/react/react_forms.asp