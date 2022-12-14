import React from 'react'
import '../styling/Navbar.css'
import { Link } from "react-router-dom";
import RecipeModal from './Recipes/RecipeModal';

//uses react router link component to load each navbar link on the client side
export default function Navbar () {
    return(
        <>
            <div className='width'>
                <ul>
                    <li>
                        <Link to={`/Homepage`}>The Cooking Collective</Link>
                    </li>
                    <li>
                        <Link to={`/Recipes`}>Recipes</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}