import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { CircleLoader } from "react-spinners";

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <CircleLoader color="#36d7b7" />
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>;
};

export default PrivateRoutes;

