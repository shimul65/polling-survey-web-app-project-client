import { Link, NavLink, } from "react-router-dom";
import logo from '../../../assets/survey.svg'
import profile from '../../../assets/profile.png'
// import { useState } from "react";
import './Navbar.css'

const Navbar = () => {


    const user = false;

    const navLinks = <>
        <li className=" py-2"><NavLink to='/'>Home</NavLink></li>
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

    return (
        <div className="sticky -top-4 z-50 bg-gradient-to-b from-sky-300 to-blue-100" >
            <div className="ml-14 absolute top-0">
            </div>
            <div className="navbar container mx-auto font-semibold pt-6 pb-3">
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
                <div data-aos="fade-down" data-aos-duration='700'
                    data-aos-offset="0" className="navbar-center hidden lg:flex">
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
                                <div className="btn-epic">
                                    <div>
                                        <span>Get Ticket</span><span>Get Ticket</span>
                                    </div>
                                </div>
                            </>
                    }
                </div>
            </div>
        </div >
    );
};

export default Navbar;