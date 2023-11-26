import { NavLink, useRouteError } from "react-router-dom";
import notFound from '../../assets/404.gif'
import { FaHome } from "react-icons/fa";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="mx-auto h-screen shadow-lg text-center mt-[20%]">
            <div className="card-body">
                {
                    error.status === 404 &&
                    <div>
                        <img className="container mx-auto w-[50%]" src={notFound} alt="" />
                        <h3 className="text-3xl my-5">Oops, looks like the page is lost.</h3>
                        <p>This is not a fault, just an accident that was not intentional.</p>
                        <NavLink to='./'>
                            <div className="justify-center mt-5">
                                <button className="flex gap-3 p-2 rounded-lg mx-auto text-white border-none bg-gradient-to-r from-amber-800  to-amber-300 hover:from-amber-300 hover:to-amber-800 ">Go Back <FaHome className="text-2xl"></FaHome></button>

                            </div></NavLink>
                    </div>
                }
            </div>
        </div>
    );
};

export default ErrorPage;