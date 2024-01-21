import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../Views/Layout/layout";
import Home from "../Views/Home/home";
import Signin from "../Views/Signin/signin";
import Signup from "../Views/Signup/signup";

const Routes = () => {

    const router = createBrowserRouter([{
        path: '/',
        element: <Layout />,
        children: [
            { path: '/', element: <Signin /> },
            { path: '/signin', element: <Signin /> },
            { path: '/signup', element: <Signup /> },
            { path: '/home', element: <Home /> },
        ]
    }])

    return (
        <RouterProvider router={router} />
    )
}

export default Routes;