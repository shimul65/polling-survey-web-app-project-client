import { Link, NavLink, } from "react-router-dom";
import logo from '../../../assets/survey.svg'
import profile from '../../../assets/profile.png'
// import { useState } from "react";
import './Navbar.css'
import { useEffect, useState } from "react";
import Login from "../../../Pages/Login/Login";

const Navbar = () => {

    const [scrolling, setScrolling] = useState(false);


    const user = false;

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const navbar2 = document.querySelector('.navbar2');

    //         const customClass = 'bg-gradient-to-b from-sky-300 to-blue-100'

    //         if (window.scrollY > 100) {
    //             navbar2?.classList.add(customClass);
    //         } else {
    //             navbar2?.classList.remove(customClass);
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    useEffect(() => {
        const handleScroll = () => {
            const navbar2 = document.querySelector('.navbar2');
            // const customClass = 'bg-gradient-to-b from-sky-300 to-blue-100';

            if (navbar2) {
                setScrolling(window.scrollY > 100);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navLinks = <>
        <li className=" py-2"><NavLink to='/'>Home</NavLink></li>
        <li className=" py-2"><NavLink to='/about'>About US</NavLink></li>
        <li className=" py-2"><NavLink to='/contact'>Contact</NavLink></li>
        {user && <>
            <li className=" py-2"><NavLink to='/addJob'>Add job</NavLink></li>
            <li className=" py-2"><NavLink to='/postedJob'>My posted jobs</NavLink></li>
            <li className=" py-2"><NavLink to='/bids'>My Bids</NavLink></li>
            <li className=" py-2"><NavLink to='/bidsRequest'>Bid Requests</NavLink></li>
        </>
        }
        {!user && <>
            <li className=" py-2"><NavLink to='/job'>Jobs</NavLink></li>
            <li className=" py-2"><NavLink to='/company'>Company</NavLink></li>
        </>
        }

    </>

    // bg-gradient-to-b from-sky-300 to-blue-100

    return (
        <div className={`fixed navbar2 z-10 w-full p-3 ${scrolling ? 'bg-gradient-to-b from-sky-300 to-blue-100' : ''}`}>
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
                <div className={`navbar-center hidden lg:flex ${scrolling ? 'text-black' : 'text-white'} `}>
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
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={user ? user.photoURL : profile} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu border menu-sm dropdown-content mt-3 z-[1] p-2 shadow-2xl bg-base-100 rounded-box w-fit">
                                    <li>
                                        <div className="text-lg"> Name : <br />{user?.displayName}</div>

                                    </li>
                                    <li>
                                        <div className="text-lg">Email : <br />{user?.email}</div>

                                    </li>
                                    <li>
                                        <button
                                            className="customBtn flex items-center justify-center h-10 rounded-full text-center py-0">LOG OUT</button>

                                    </li>
                                </ul>
                            </div>
                            :
                            <>
                                <div className="btn-epic shadow-md shadow-sky-300" onClick={() => document.getElementById('my_modal_5').showModal()}>
                                    <div>
                                        <span>Log in</span><span>Log in</span>
                                    </div>
                                </div>

                                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                    <div className="relative shadow-2xl glass  px-20 card bg-[#EBF4F]">
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

export default Navbar;