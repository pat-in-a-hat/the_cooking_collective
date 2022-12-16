import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

//main page for react router. this places navbar at the top of every page
//router outlet placements are ditacted by user actions in the navbar
export default function MainRouter () {
    const style = {
        width: '100%',
        height: '100vh',
    }

    return(
        <>
        <div style={{style}}>
            <Navbar />
            <Outlet />
        </div>
        </>
    )
}