import React from 'react'
import '../styling/Navbar.css'
import { Link } from "react-router-dom";

export default function Navbar () {
    return(
        <>
            <div>
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