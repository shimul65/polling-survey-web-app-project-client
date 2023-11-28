import { Outlet } from "react-router-dom";
import DashboardNav from "./DashboardNav/DashboardNav";
import DashboardFoot from "./DashboardFoot/DashboardFoot";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";
import { Toaster } from "react-hot-toast";


const Dashboard = () => {
    return (
        <div className="">
            <DashboardNav></DashboardNav>
            <div className="container mx-auto border" style={{ minHeight: 'calc(100vh - 155px)' }}>
                <Outlet></Outlet>
            </div>
            <div className="bg-gradient-to-b from-sky-300 to-blue-100 text-black">
                <DashboardFoot></DashboardFoot>
            </div>
            <ScrollToTop></ScrollToTop>
            <Toaster></Toaster>
        </div>
    );
};

export default Dashboard;