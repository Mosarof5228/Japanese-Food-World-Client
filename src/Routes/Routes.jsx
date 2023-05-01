import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../Home/Home/Home";
import Login from "../Home/Login/Login";
import Registration from "../Home/Registration/Registration";
import Main from "../layout/Main";

const router = createBrowserRouter([
    // {
    //     path: '/',
    //     element: <LoginLayout></LoginLayout>,
    //     children: [
    //         {
    //             path: '/',
    //             element: <Navigate to=""></Navigate>
    //         },
    //         {
    //             path: '/login',
    //             element: <Login></Login>
    //         },
    //         {
    //             path: '/registration',
    //             element: <Registration></Registration>
    //         }
    //     ]
    // },
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
            }
        ]
    },

])
export default router;