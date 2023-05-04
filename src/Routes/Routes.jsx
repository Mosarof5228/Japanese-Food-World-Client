import { createBrowserRouter, Navigate } from "react-router-dom";
import BlogPage from "../Home/Home/BlogPage/BlogPage";
import Home from "../Home/Home/Home";
import Login from "../Home/Login/Login";
import NotFoundPage from "../Home/NotFoundPage/NotFoundPage";
import RecepieDetails from "../Home/RecepieDetails/RecepieDetails";
import Registration from "../Home/Registration/Registration";
import Main from "../layout/Main";
import PrivetRoute from "./PrivetRoute";

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
                loader: ({ params }) => fetch(`http://localhost:5000/chiefs/${params.id}`)
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