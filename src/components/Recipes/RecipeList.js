import React from 'react'
import { getRecipes } from '../../rest/RecipeAPI'

export default function RecipeList () {



}

export async function loader () {
    const recipes = await getRecipes();
    return { recipes };
}