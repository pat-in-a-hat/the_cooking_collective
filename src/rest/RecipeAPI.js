import React from 'react'
import { useState, useEffect } from 'react'
import SavedRecipes from '../components/Recipes/SavedRecipes'
import { Spinner } from '@chakra-ui/react'
import '../styling/RecipeAPI.css'

export default function RecipeAPI () {
    //mockAPI db link
    const APILINK = 'https://634f6de2df22c2af7b512858.mockapi.io/pickem/cookingcollective'

    //using a variety of use state hooks here
    const [updated, setUpdated] = useState(0)//to call fetch each time an item is deleted
    const [loading, setLoading] = useState(true)//so that the returns don't load until after
    const [recipes, setRecipes] = useState([]) //for GET data storage after it is fetched

    //GET using fetch API - retrieve data
    const getRecipes = async () => {
        try {
            const response = await fetch(APILINK)
            const data = await response.json();
            setRecipes(data)//puts the fetched data into this state array
            setLoading(false)//triggers the load state so the jsx is then loaded
            console.log('fetched from MockAPI')
        } catch (error){
            console.log('caught error while fetching')
            console.log(error)
        }
    }

    //using useEffect to fetch on load - need to explore replacing this with react router loader
    useEffect(() => {
        getRecipes()
    }, [updated])//recalls useeffect when an item is deleted or edited


    /* TO BE USED FOR LATER VERSIONING - plan to have recipes open to their own pages
    
    GET DATA:
    const getRecipe = async (id) => {
        
        try {
        const response = await fetch (APILINK + `/${id}`)
        const todo = await response.json()
        console.log(todo); 
        } catch (error) {
        console.log(error)
        }
    }*/

    //DELETE with fetch API - delete data
    const deleteRecipe = async (id) => {
        console.log(id)
        try{
        const response = await fetch (APILINK + `/${id}`, {
            method: 'DELETE'
        })
        const message = await response.json();
        console.log('deleted ' + message)
        } catch (error) {
            return error
        }
        setLoading(true)  //better UX to have the loader go again during fetch
        setUpdated(() => updated + 1)//updated state change retriggers useeffect and fetches updated data
    }

    //POST with fetchAPI - create data
    const addRecipe = async (link, notes) => {
        console.log('attempting to post to mockAPI')

        try{
        let response = await fetch (APILINK, {
            method: 'POST',
            body: JSON.stringify({
                link: link,
                notes: notes
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            let data = await response.json();
            console.log(data + 'created')
            setLoading(true)//better UX to have the loader go again during fetch
            setUpdated(() => updated + 1) //updated state change retriggers useeffect and fetches updated data
        } catch (error){
        return error;
        }
    }

    //PUT with fetchAPI - update data
    //at some point would like to do this inline https://www.emgoto.com/react-inline-edit/
    const updateRecipe = async (link, notes, id) => {

        try{
            const response = await fetch(APILINK + `/${id}`, {
                method: 'PUT',
                body: JSON.stringify ({
                    link: link,
                    notes: notes
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            const message = await response.json();
            console.log(message)
            setLoading(true)//better UX to have the loader go again during fetch
            setUpdated(() => updated + 1) //updated state change retriggers useeffect and fetches updated data
        } catch (error){
            return error;
        }

    }

    //this stops the main jsx from loading, preventing an error from the like state array being blank
    //fetch has a slight delay so this prevents that delay from messing up the code loading
    if (loading) {
        //have this return a chakra loading symbol for better UI/UX
        return (
            <div className='loader-layout'>
                <Spinner
                    thickness='6px'
                    speed='0.75s'
                    emptyColor='gray.200'
                    color='black'
                    size='xl'
                    id='spinner'
                />      
            </div>
        )
    }

    //passing all these functions to the saved recipes component as props
    return(
        <div className='recipe-layout'>
            <div className='recipes-center'>
            <SavedRecipes 
                recipes={recipes}
                deleteRecipe={deleteRecipe}
                addRecipe={addRecipe}
                updateRecipe={updateRecipe}
            />
            </div>
        </div>
    )
}


//these links helpful pointers for this section
//https://www.freecodecamp.org/news/how-to-consume-rest-apis-in-react/
//https://www.w3schools.com/react/react_useeffect.asp
//https://replit.com/@stepanski/Week-6-Fetch-API#script.js
