import { Toaster } from "react-hot-toast";
import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

const Main = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <div className="bg-gradient-to-b from-sky-300 to-blue-100 text-black">
                <Footer></Footer>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Main;

// className="bg-gradient-to-r from-white  to-[#fff1d8]"