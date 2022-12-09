import React from 'react'
import '../styling/Navbar.css'
import BackgroundVideo from './Home/BackgroundVideo'
import { Outlet, Link } from "react-router-dom";

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