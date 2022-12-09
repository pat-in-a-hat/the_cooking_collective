import React from "react";
import { Outlet } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Homepage from '../Home/Homepage'
import RecipeList from "../Recipes/RecipeList";
import Navbar from "../Navbar";

export default function MainRouter () {
    return(
        <>
        <Navbar />
        <Outlet />
        </>
    )
}