import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/register/Register";
import Banner from "../pages/home/Banner";
import Home from "../pages/home/Home";
import AddToy from "../pages/add toy/AddToy";
import ShowDetails from "../pages/shared/ShowDetails";
import PrivetRoutes from "./PrivetRoutes";
import AllToys from "../pages/all-toys/AllToys";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "add-toy",
        element: (
          <PrivetRoutes>
            <AddToy></AddToy>
          </PrivetRoutes>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivetRoutes>
            <ShowDetails></ShowDetails>
          </PrivetRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/details/${params.id}`),
      },
      {
        path: "/all-toys",
        element: <AllToys></AllToys>,
      },
    ],
  },
]);
export default router;
