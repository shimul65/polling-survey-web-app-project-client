import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import { CircleLoader } from "react-spinners";


const AdminRoute = ({ children }) => {

    const { user, loading } = useAuth();

    const location = useLocation();

    const [isAdmin, isAdminLoading] = useAdmin();

    if (loading || isAdminLoading) {
        return <CircleLoader color="#36d7b7" className="mx-auto pt-[40%]" />
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate state={location.pathname} to='/' replace></Navigate>;
};

export default AdminRoute;