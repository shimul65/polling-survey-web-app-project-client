import { Link, NavLink, useNavigate, } from "react-router-dom";
import logo from '../../../assets/survey.svg'
import profile from '../../../assets/profile.png'
// import { useState } from "react";
import Login from "../../../Pages/Login/Login";
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";
// import Swal from "sweetalert2";
import auth from "../../../Firebase/firebase.config";
import { IoHomeOutline } from "react-icons/io5";
import { RiAdminLine } from "react-icons/ri";
import { RiSurveyLine } from "react-icons/ri";
import { HiOutlineSquaresPlus } from "react-icons/hi2";
import { SlPaypal } from "react-icons/sl";
import DrawerDashboard from "../../../Components/DrawerDashboard";

const DashboardNav = () => {


    const navigate = useNavigate();
    const { user, logOut } = useAuth();

    const handleLogOut = () => {

        logOut(auth)
            .then(() => {
                navigate('/');
                toast.success('User Log Out Successfully')
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorCode, errorMessage);
            })
    }


    const navLinks = <>
        <li className="py-2"><NavLink className={'flex gap-2 items-center'} to='/dashboard/adminHome'>
            <RiAdminLine className="text-2xl text-blue-800"></RiAdminLine>
            <p>Admin</p>
        </NavLink></li>
        <li className="py-2"><NavLink className={'flex gap-2 items-center'} to='/dashboard/surveyRequests'>
            <RiSurveyLine className="text-2xl text-blue-800"></RiSurveyLine>
            <p>Survey Requests</p>
        </NavLink></li>
        <li className="py-2"><NavLink className={'flex gap-2 items-center'} to='/dashboard/surveyResponses'>
            <HiOutlineSquaresPlus className="text-2xl text-blue-800"></HiOutlineSquaresPlus>
            <p>Survey Responses</p>
        </NavLink></li>
        <li className="py-2"><NavLink className={'flex gap-2 items-center'} to='/dashboard/payments'>
            <SlPaypal className="text-2xl text-blue-800"></SlPaypal>
            <p>Payments</p>
        </NavLink></li>
        <li className="py-2"><NavLink className={'flex gap-2 items-center'} to='/'>
            <IoHomeOutline className="text-2xl text-blue-800"></IoHomeOutline>
            <p>Home</p>
        </NavLink></li>

    </>

    return (
        <div className="w-full p-3 bg-gradient-to-b from-sky-300 to-blue-100">
            <div className="navbar container mx-auto font-semibold">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to='/' ><img className='w-[150px]' src={logo} alt="" /></Link>
                </div>
                <div className={`navbar-center hidden lg:flex text-black`}>
                    <ul className="flex justify-center items-center gap-6 px-1">
                        {navLinks}
                    </ul>
                </div>

                <div className="navbar-end">
                    {/* <a className="btn-epic" href="https://www.epicurrence.com/" target="_blank">
                    <div></div></a> */}
                    {
                        user ?
                            <div className="dropdown dropdown-end ">
                                <div className="drawer drawer-ope">
                                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                                    <div className="drawer-content">
                                        <label htmlFor="my-drawer" tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                            <div className="w-24 rounded-full">
                                                <img src={user ? user.photoURL : profile} />
                                            </div>
                                        </label>
                                    </div>
                                    <div className="drawer-side z-10" style={{
                                        fontFamily: 'Inter'
                                    }}>
                                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                                        <div className="pt-4 w-80 min-h-full bg-base-200 text-base-content">
                                            <Link to='/' ><img className='w-[150px] mt-5 mx-auto' src={logo} alt="" /></Link>
                                            <div className="border mt-5 mx-4 rounded-lg py-5 bg-sky-100">
                                                <div className="flex flex-col items-center space-y-4">
                                                    <img className="rounded-full w-52 mx-auto" src={user ? user.photoURL : profile} />
                                                    <h2 className="text-2xl font-semibold">{user?.displayName}</h2>
                                                    <div className="text-xl">{user?.email}</div>
                                                </div>
                                            </div>
                                            <DrawerDashboard></DrawerDashboard>
                                            <div onClick={handleLogOut} className="btn-epic mt-5 mx-auto shadow-md border shadow-sky-300" style={{ height: '50px', width: '70%' }}>
                                                <div>
                                                    <span style={{ left: '' }}>Log Out</span><span style={{ left: '' }}>Log Out</span>
                                                </div>
                                            </div></div>
                                    </div>
                                </div>
                            </div>
                            :
                            <>
                                <div className="btn-epic shadow-md shadow-sky-300" onClick={() => document.getElementById('my_modal_5').showModal()}>
                                    <div>
                                        <span>Log in</span><span>Log in</span>
                                    </div>
                                </div>

                                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                    <div className="shadow-2xl glass  px-20 card bg-[#EBF4F]">
                                        <Login></Login>
                                        <div className="modal-action">
                                            <form method="dialog" className="">
                                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </>
                    }
                </div>
            </div>
        </div >
    );
};

export default DashboardNav;