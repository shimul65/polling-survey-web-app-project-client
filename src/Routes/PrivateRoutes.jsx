import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { CircleLoader } from "react-spinners";

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <div className="mx-auto py-[30%]">
            <CircleLoader color="#36d7b7"  className="mx-auto" />
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>;
};

export default PrivateRoutes;

