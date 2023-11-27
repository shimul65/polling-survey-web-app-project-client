
import { useEffect, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Register from "../Register/Register";
import useAuth from '../../Hooks/useAuth';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
// import Swal from "sweetalert2";

const Login = () => {

    const { login } = useAuth();

    const captchaRef = useRef();

    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        loadCaptchaEnginge(6, 'silver');
    }, [])

    const handleValidateCaptcha = () => {

        const user_captcha_value = captchaRef.current.value;

        if (validateCaptcha(user_captcha_value, false)) {
            setDisabled(false);
        }
        else {
            setDisabled(true);
        }
    }

    const navigate = useNavigate();

    const location = useLocation();

    const [showPass, setShowPass] = useState(false);

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');


        // create new user
        login(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                // navigate after log in
                navigate(location?.state ? location.state?.from : '/');
                toast.success('User Log In Successfully');

                // setTimeout(() => {
                //     Swal.fire({
                //         position: "top-end",
                //         icon: "success",
                //         title: "User Log In Successfully",
                //         showConfirmButton: false,
                //         timer: 1500
                //     });
                // }, 1000);

                // setTimeout(() => {
                //     window.location.reload();
                // }, 2500);
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode,errorMessage);
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title:  
                    `Please give correct mail & Password`,
                    showConfirmButton: false,
                    timer: 2500
                });
            })

    }


    return (
        <div>
            <div className="card-body mx-auto my-6 rounded-2xl py-8 px-10 text-black">
                <form onSubmit={handleLogin} method="dialog" >
                    <h2 className=' text-4xl font-extrabold text-[#05bcff] text-center' style={{
                        fontFamily: 'Inter'
                    }}>&rdquo; Hi, Welcome Back! &rdquo;</h2>
                    <div className="divider divider-info">Log In</div>
                    <div className="form-control">
                        <label className="label">
                            <span className="">Email</span>
                        </label>
                        <input type="email" placeholder="Enter your email address " className="input bg-transparent input-info" name="email" required />
                    </div>
                    <div className="form-control mt-7">
                        <label className="label">
                            <span className="">Password</span>
                        </label>
                        <div className=" relative ">
                            <input type={showPass ? "text" : "password"}
                                placeholder="Enter your password" className="input w-full bg-transparent input-info" name='password' required />
                            <span onClick={() => setShowPass(!showPass)} className="absolute top-3 right-8 text-2xl ">
                                {
                                    showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }</span>
                        </div>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <LoadCanvasTemplate />
                        </label>
                        <input disabled={!disabled} onChange={handleValidateCaptcha} ref={captchaRef} type="captcha" placeholder="Type Captcha " className="input bg-transparent input-info" required />
                    </div>
                    {
                        disabled ? <button className="btn flex mx-auto mt-5" disabled='disabled'>Log In</button> :
                            <div className="form-control mt-6">
                                <button type="submit">
                                    <div className="btn-epic mx-auto shadow-md shadow-sky-300 " style={{ height: '50px', width: '60%' }}>
                                        <div>
                                            <span style={{ left: '0' }}>Log In</span><span style={{ left: '0' }}>Log In</span>
                                        </div>
                                    </div>
                                </button>
                            </div>
                    }
                </form>

                <div className="divider">continue with</div>
                <div className="w-full">
                    {/* <SocialLogin></SocialLogin> */}
                </div>
                <p className="mt-8 text-center">Don’t Have An Account ? <span onClick={() => document.getElementById('my_modal_6').showModal()} className="text-blue-700 underline font-medium cursor-pointer">Register</span></p>
            </div>
            <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
                <div className="relative shadow-2xl glass  px-20 card bg-[#EBF4F]">
                    <div className="modal-action">
                        <Register></Register>
                        <form method="dialog" className="">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Login;