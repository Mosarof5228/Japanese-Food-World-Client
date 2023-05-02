import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../Home/Home/Home";
import Login from "../Home/Login/Login";
import RecepieDetails from "../Home/RecepieDetails/RecepieDetails";
import Registration from "../Home/Registration/Registration";
import Main from "../layout/Main";

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
                element: <RecepieDetails></RecepieDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/chiefs/${params.id}`)
            }

        ]
    },

])
export default router;