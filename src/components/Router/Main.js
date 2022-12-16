import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

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