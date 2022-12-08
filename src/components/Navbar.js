import React from 'react'
import '../styling/navbar.css'
import BackgroundVideo from './BackgroundVideo'

export default function Navbar () {
    return(
        <>
            <div>
                <ul>
                    <li><a href='./Homepage.js'>The Cooking Collective</a></li>
                    <li><a href='./RecipeList.js'>Recipes</a></li>
                </ul>
                <BackgroundVideo />
            </div>
        </>
    )
}