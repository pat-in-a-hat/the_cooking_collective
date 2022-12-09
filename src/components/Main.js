import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider,Route } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Homepage from './Homepage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />
  },
]);

export default function MainRouter () {
    return(
        <RouterProvider router={router} />
    )
}