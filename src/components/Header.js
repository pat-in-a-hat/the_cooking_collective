import React from 'react'
import logo from '../assets/piebackgroundimage.png'

//this to be used later on for better semantic html layout
export default function Header () {
    return (
        <header>
            <img src={logo} alt='cooking collective logo' height='40 px' />
        </header>
    )
}