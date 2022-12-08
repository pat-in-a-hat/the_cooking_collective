import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider,Route } from "react-router-dom";
import Homepage from './Homepage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
]);

export default function MainRouter () {
    return(
        <RouterProvider router={router} />
    )
}