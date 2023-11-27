
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Register from "../Register/Register";

const Login = () => {

    //show password
    const [showPass, setShowPass] = useState(false);

    return (
        <>
            <div className="card-body mx-auto my-16 rounded-2xl py-8 px-10 text-black">
                <form className="">
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
                    <div className="form-control mt-6">
                        <div className="btn-epic mx-auto shadow-md shadow-sky-300 " style={{ height: '50px', width: '60%' }}>
                            <div>
                                <span><button>Log In</button></span><span><button>Log In</button></span>
                            </div>
                        </div>
                    </div>
                </form>

                <div className="divider">continue with</div>
                <div className="w-full">
                    {/* <SocialLogin></SocialLogin> */}
                </div>
                <p className="mt-8 text-center">Don’t Have An Account ? <span onClick={() => document.getElementById('my_modal_6').showModal()} className="text-blue-700 underline font-medium cursor-pointer">Register</span></p>
            </div>
            <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
                <div className="relative shadow-2xl glass  px-20 card bg-[#EBF4F]">
                    <Register></Register>
                    <div className="modal-action">
                        <form method="dialog" className="">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default Login;