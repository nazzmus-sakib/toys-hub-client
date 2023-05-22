import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/register/Register";

import Home from "../pages/home/Home";
import AddToy from "../pages/add toy/AddToy";
import ShowDetails from "../pages/shared/ShowDetails";
import PrivetRoutes from "./PrivetRoutes";
import AllToys from "../pages/all-toys/AllToys";
import MyToys from "../pages/my-toys/MyToys";
import UpdateToys from "../pages/my-toys/UpdateToys";
import Blog from "../pages/blog/Blog";
import Error from "../pages/error/Error";

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
          fetch(`https://toys-hub-server.vercel.app/details/${params.id}`),
      },
      {
        path: "/all-toys",
        element: <AllToys></AllToys>,
      },
      {
        path: "my-toys",
        element: (
          <PrivetRoutes>
            <MyToys></MyToys>
          </PrivetRoutes>
        ),
      },
      {
        path: "/update-toy/:id",
        element: <UpdateToys></UpdateToys>,
        loader: ({ params }) =>
          fetch(`https://toys-hub-server.vercel.app/single-toy/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
export default router;
