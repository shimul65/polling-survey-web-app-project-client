import { Typewriter } from "react-simple-typewriter";
import useAdmin from "../../Hooks/useAdmin";
import useSurveyor from "../../Hooks/useSurveyor";
import { NavLink } from "react-router-dom";
import { RiAdminLine, RiContactsLine, RiSurveyLine } from "react-icons/ri";
import { HiOutlineSquaresPlus } from "react-icons/hi2";
import { SlPaypal } from "react-icons/sl";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineContacts } from "react-icons/md";
import useUsers from "../../Hooks/useUsers";
import { PiStarOfDavid } from "react-icons/pi";
import useAuth from "../../Hooks/useAuth";


const DrawerDashboard = () => {

    const { user } = useAuth();
    const [isAdmin] = useAdmin();
    const [isSurveyor] = useSurveyor();
    const [allUsers] = useUsers();
    const proUser = allUsers?.some(singleUser => singleUser?.role === 'Pro User' && singleUser?.email === user.email);

    return (
        <div className="border mt-5 ">
            {
                !isAdmin && !isSurveyor &&
                <>
                    <h2 className="text-2xl text-blue-600 text-center py-3 bg-sky-300"> <Typewriter
                        cursor
                        cursorStyle='|'
                        cursorBlinking
                        delaySpeed={1000}
                        deleteSpeed={25}
                        loop={0}
                        typeSpeed={75}
                        words={[
                            'USER',
                            'DASHBOARD',
                        ]}
                    /></h2>
                    <ul className="menu rounded-box text-lg">
                        <li className="py-2"><NavLink className={'flex gap-2 items-center'} to='/'>
                            <IoHomeOutline className="text-2xl text-blue-800"></IoHomeOutline>
                            <p>Home</p>
                        </NavLink></li>
                        <li className="py-2"><NavLink className={'flex gap-2 items-center'} to='/surveys'>
                            <MdOutlineContacts className="text-2xl text-blue-800"></MdOutlineContacts>
                            <p>Surveys</p>
                        </NavLink></li>
                        <li className="py-2"><NavLink className={'flex gap-2 items-center'} to='/about'>
                            <MdOutlineContacts className="text-2xl text-blue-800"></MdOutlineContacts>
                            <p>About US</p>
                        </NavLink></li>
                        <li className="py-2"><NavLink className={'flex gap-2 items-center'} to='/contact'>
                            <RiContactsLine className="text-2xl text-blue-800"></RiContactsLine>
                            <p>Contact</p>
                        </NavLink></li>
                        {
                            !proUser &&
                            <li className="py-2"><NavLink className={'flex gap-2 items-center'} to='/payment'>
                                <PiStarOfDavid className="text-2xl text-blue-800"></PiStarOfDavid>
                                <p>Pro User</p>
                            </NavLink></li>
                        }
                    </ul>
                </>
            }
            {
                isAdmin &&
                <>
                    <h2 className="text-2xl text-blue-600 text-center py-3 bg-sky-300"> <Typewriter
                        cursor
                        cursorStyle='|'
                        cursorBlinking
                        delaySpeed={1000}
                        deleteSpeed={25}
                        loop={0}
                        typeSpeed={75}
                        words={[
                            'ADMIN',
                            'DASHBOARD',
                        ]}
                    /></h2>
                    <ul className="menu rounded-box text-lg">
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
                    </ul>
                </>
            }
            {
                isSurveyor &&
                <>
                    <h2 className="text-2xl text-blue-600 text-center py-3 bg-sky-300"> <Typewriter
                        cursor
                        cursorStyle='|'
                        cursorBlinking
                        delaySpeed={1000}
                        deleteSpeed={25}
                        loop={0}
                        typeSpeed={75}
                        words={[
                            'SURVEYOR',
                            'DASHBOARD',
                        ]}
                    /></h2>
                    <ul className="menu rounded-box text-lg">
                        <li className="py-2"><NavLink className={'flex gap-2 items-center'} to='/dashboard/surveyorHome'>
                            <RiAdminLine className="text-2xl text-blue-800"></RiAdminLine>
                            <p>My Survey</p>
                        </NavLink></li>
                        <li className="py-2"><NavLink className={'flex gap-2 items-center'} to='/dashboard/createSurvey'>
                            <RiSurveyLine className="text-2xl text-blue-800"></RiSurveyLine>
                            <p>Create Survey</p>
                        </NavLink></li>
                        <li className="py-2"><NavLink className={'flex gap-2 items-center'} to='/dashboard/mySurveyResponses'>
                            <HiOutlineSquaresPlus className="text-2xl text-blue-800"></HiOutlineSquaresPlus>
                            <p>Survey Responses</p>
                        </NavLink></li>
                        <li className="py-2"><NavLink className={'flex gap-2 items-center'} to='/'>
                            <IoHomeOutline className="text-2xl text-blue-800"></IoHomeOutline>
                            <p>Home</p>
                        </NavLink></li>
                    </ul>
                </>
            }
        </div>
    );
};

export default DrawerDashboard;