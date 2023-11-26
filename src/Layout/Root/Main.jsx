import { Toaster } from "react-hot-toast";
import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

const Main = () => {
    return (
        <div className="bg-gradient-to-r from-white  to-[#fff1d8]">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster></Toaster>
        </div>
    );
};

export default Main;