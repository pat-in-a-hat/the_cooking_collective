import React from 'react'
import { useState } from 'react'

export default function RecipeAPI () {
    //mockAPI db link
    const APILINK = ''

    //using a variety of use state hooks here
    //const [revealed, setRevealed] = useState(false)//to determine whether the saved facts are revealed
    const [updated, setUpdated] = useState(0)//to call fetch each time an item is deleted
    const [loading, setLoading] = useState(true)//so that the returns don't load until after
    const [recipes, setRecipes] = useState([]) //for GET data storage after it is fetched

    //GET using fetch API
    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch(APILINK)
                const data = await response.json();
                setRecipes(data)//puts the fetched data into this state array
                setLoading(false)//triggers the load state so the jsx is then loaded
            } catch (error){
                console.log('caught error while fetching')
                console.log(error)
            }
        }
        fetchRecipes()

    }, [updated])//recalls useeffect when an item is deleted


    //DELETE with fetch API
    const deleteRecipe = async (id) => {
        let response = await fetch (
            APILINK + `/${id}`, 
            {
            method: 'DELETE',
            })
        setLoading(true)
        setUpdated(() => updated + 1)//updated state change retriggers useeffect, therefore refetches
    }

    //POST with fetchAPI
    const addRecipe = async (link, notes) => {
        console.log('attempting to post to mockAPI')
        let response = await fetch (APILINK, {
            method: 'POST',
            body: JSON.stringify({
                link: link,
                notes: notes,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        console.log('new recipe posted to mockAPI')
        let data = await response.json();
        setLoading(true)//not sure if this will actually work to put everything back to loading, we shall see...
        setUpdated(() => updated + 1)
        //add newly posted item to the like state?
    }

    //this stops the main jsx from loading, preventing an error from the like state array being blank
    //fetch has a slight delay so this prevents that delay from messing up the code loading
    if (loading) {
        //have this return a chakra loading symbol for better UI/UX
        return (
            ''
        )
    }

    /*
    //these two methods open and close the 'liked' items card
    const revealLikedFacts = () => {
            //console.log('revealed saved facts')
            setRevealed(true)
        }
    
    const concealLikedFacts = () => {
        setRevealed(false)
    }*/

    const handleSubmit = (event) => {
        event.preventDefault()
        addRecipe(link, notes)//might need to rejigger this a bit to properly load
    }


    //need to pass this all to something via props (callback)
    return(
        <>
        <VStack
            divider={<StackDivider bordercolor='gray.200' />}
            spacing={8}
        >
            {recipes.map((recipe) => {
                <Box key={recipe.id}>
                    {recipe.link}
                    {recipe.notes}
                </Box>
            })}
        </VStack>
            
        </>
    )
}


//these links helpful pointers for this section
//https://www.freecodecamp.org/news/how-to-consume-rest-apis-in-react/
//https://www.w3schools.com/react/react_useeffect.asp
