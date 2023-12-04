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
import Payment from "../Pages/Home/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/Admin/PaymentHistory";
import SurveyorHome from "../Pages/Dashboard/Survyeor/SurveyorHome";
import CreateSurvey from "../Pages/Dashboard/Survyeor/CreateSurvey";
import UpdateSurvey from "../Pages/Dashboard/Survyeor/UpdateSurvey";
import AdminRoute from "./AdminRoute";
import SurveyRequest from "../Pages/Dashboard/Admin/SurveyRequest";
import PublishesSurvey from "../Pages/PublishesSurvey/PublishesSurvey";
import SurveyDetails from "../Pages/Home/SurveyDetails";
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
                path: "/surveys",
                element: <PublishesSurvey></PublishesSurvey>
            },
            {
                path: "/surveyDetails/:id",
                element: <SurveyDetails></SurveyDetails>,
                // loader: ({ params }) => fetch(`http://localhost:5066/publishedSurveys/${params?.id}`)
            },
            {
                path: "/payment",
                element: <PrivateRoutes><Payment></Payment></PrivateRoutes>
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
            // admin routes
            {
                path: "/dashboard/adminHome",
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path: "/dashboard/payments",
                element: <AdminRoute><PaymentHistory></PaymentHistory></AdminRoute>
            },
            {
                path: "/dashboard/surveyRequests",
                element: <AdminRoute><SurveyRequest></SurveyRequest></AdminRoute>
            },

            // surveyor routes
            {
                path: "/dashboard/surveyorHome",
                element: <SurveyorHome></SurveyorHome>
            },
            {
                path: "/dashboard/createSurvey",
                element: <CreateSurvey></CreateSurvey>
            },
            {
                path: "/dashboard/updateSurvey/:id",
                element: <UpdateSurvey></UpdateSurvey>,
                loader: ({ params }) => fetch(`http://localhost:5066/surveys/${params?.id}`)
            },


        ]
    },
]);

export default router;