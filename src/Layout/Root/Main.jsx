import { Toaster } from "react-hot-toast";
import Navbar from "./Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer/Footer";

const Main = () => {
    const location = useLocation();
    const isLogin = location.pathname.includes('login');
    const isRegister = location.pathname.includes('register');
    return (
        <div className="">
            {
                isLogin || isRegister || <Navbar></Navbar>
            }
            <Outlet></Outlet>
            {
                isLogin || isRegister || <div className="bg-gradient-to-b from-sky-300 to-blue-100 text-black">
                    <Footer></Footer>
                </div>
            }
            <Toaster></Toaster>
        </div>
    );
};

export default Main;

// className="bg-gradient-to-r from-white  to-[#fff1d8]"