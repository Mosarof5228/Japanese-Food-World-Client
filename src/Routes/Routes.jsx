import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import BlogPage from "../Home/Home/BlogPage/BlogPage";
// import Home from "../Home/Home/Home";
import Login from "../Home/Login/Login";
import NotFoundPage from "../Home/NotFoundPage/NotFoundPage";
import RecepieDetails from "../Home/RecepieDetails/RecepieDetails";
import Registration from "../Home/Registration/Registration";
import Main from "../layout/Main";
import PrivetRoute from "./PrivetRoute";
const Home = React.lazy(() => import("../Home/Home/Home"));

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: 'chief/:id',
                element: <PrivetRoute><RecepieDetails></RecepieDetails></PrivetRoute>,
                loader: ({ params }) => fetch(`https://japanese-food-world-server-mosarof5228.vercel.app/chiefs/${params.id}`)
            },
            {
                path: '/blog',
                element: <BlogPage></BlogPage>
            },
            {
                path: "*",
                element: <NotFoundPage></NotFoundPage>
            }

        ]
    },

])
export default router;