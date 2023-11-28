import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Root/Main";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard/Dashboard"
import PrivateRoutes from "./PrivateRoutes";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome";
// import ManageUser from "../Pages/Dashboard/Admin/ManageUser";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/dashboard/adminHome",
                element: <AdminHome></AdminHome>
            },
            // {
            //     path: "/dashboard/users",
            //     element: <ManageUser></ManageUser>
            // },

        ]
    },
]);

export default router;