import { NavLink, useRouteError } from "react-router-dom";
import notFound from '../../assets/404.gif';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="mx-auto h-screen shadow-lg text-center">
            <div className="card-body">
                {
                    error.status === 404 &&
                    <div>
                        <img className="container mx-auto w-[50%]" src={notFound} alt="" />
                        <h3 className="text-3xl my-5">Oops, looks like the page is lost.</h3>
                        <p>This is not a fault, just an accident that was not intentional.</p>
                        <NavLink to='./'>
                            <div className="justify-center mt-10">
                                <div className="btn-epic shadow-md shadow-sky-300 " style={{ height: '50px', left: '35%' }}>
                                    <div>
                                        <span style={{ left: '0' }}>Go Home </span><span style={{ left: '0' }}>Go Home</span>
                                    </div>
                                </div>
                            </div></NavLink>
                    </div>
                }
            </div>
        </div>
    );
};

export default ErrorPage;