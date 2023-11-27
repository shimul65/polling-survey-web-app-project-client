
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from 'react';

const Register = () => {


    //show password
    const [showPass, setShowPass] = useState(false);

    // const handleRegister = (e) => {
    //     e.preventDefault();
    //     const form = new FormData(e.currentTarget);
    //     const email = form.get('email');
    //     const password = form.get('password');
    //     const name = form.get('name');
    //     const photoURL = form.get('photoURL');
    //     const isAccepted = form.get('terms') === 'on';

    //     // password validation check
    //     if (password.length < 6) {
    //         toast.error('Password should be at least 6 characters or longer');
    //         return
    //     }
    //     else if (!/[A-Z]/.test(password)) {
    //         toast.error('Your Password should contain an uppercase letter')
    //         return;
    //     }
    //     // /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
    //     else if (!/[$&+,:;=?@#|'<>.-^*()%!]/.test(password)) {
    //         toast.error('Your Password should contain a special character');
    //         return;
    //     }
    //     else if (!isAccepted) {
    //         toast.error('Please accept our terms & conditions');
    //         return;
    //     }

    //     //create new user
    //     createUser(email, password)
    //         .then(result => {
    //             const user = result.user;
    //             console.log(user);

    //             // update profile
    //             handleUpdateProfile(name, photoURL)
    //                 .then(() => {
    //                     navigate(location?.state ? location.state : '/');
    //                     toast.success('User Sign Up Successfully')
    //                 }).catch((error) => {
    //                     console.log(error);
    //                 });
    //         })
    //         .catch(error => {
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //             toast.error(errorCode, errorMessage);
    //         })
    // }

    return (
        <>
            {/* register */}
            <div className="card-body mx-auto my-16 rounded-2xl py-8 px-10 text-black">
                <form>
                    <h2 className=' text-4xl font-extrabold text-[#05bcff] text-center' style={{
                        fontFamily: 'Inter'
                    }}>&rdquo; Create Your Account! &rdquo;</h2>
                    <div className="divider divider-info">Register</div>
                    <div className="form-control mt-6">
                        <label className="label">
                            <span className=" label-text font-semibold">Your Name</span>
                        </label>
                        <input type="text" placeholder="Enter your name" className="input bg-transparent input-info" name="name" required />
                    </div>
                    <div className="form-control mt-6">
                        <label className="label">
                            <span className=" label-text font-semibold">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Enter your photo url" className="input bg-transparent input-info" name="photoURL" required />
                    </div>
                    <div className="form-control mt-6">
                        <label className="label">
                            <span className=" label-text font-semibold">Email</span>
                        </label>
                        <input type="email" placeholder="Enter your email address" className="input bg-transparent input-info" name="email" required />
                    </div>
                    <div className="form-control mt-6">
                        <label className="label">
                            <span className=" label-text font-semibold">Password</span>
                        </label>
                        <div className=" relative ">
                            <input type={showPass ? "text" : "password"}
                                placeholder="Enter your password" className="input w-full bg-transparent input-info" name='password' required />
                            <span onClick={() => setShowPass(!showPass)} className="absolute top-3 right-8 text-2xl ">
                                {
                                    showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }</span>
                        </div>
                    </div>
                    <div className='mt-4 flex gap-2 items-center'>
                        <input type="checkbox" name="terms" id="terms" />
                        <label htmlFor="terms">Accept Our Terms and Conditions</label>
                    </div>
                    <div className="form-control my-6">
                        <div className="btn-epic mx-auto shadow-md shadow-sky-300 " style={{ height: '50px', width: '60%' }}>
                            <div>
                                <span><button>Register</button></span><span><button>Register</button></span>
                            </div>
                        </div>
                    </div>
                </form>
                <form method="dialog" className="relative ">
                    <p className="text-center ">Already Have An Account ?
                    </p>
                    <button className=" text-blue-700 underline font-medium cursor-pointer absolute bottom-0 right-10">Log In</button>
                </form>
                <div className="divider">continue with</div>
                <div className="w-full">
                    {/* <SocialLogin></SocialLogin> */}
                </div>
            </div>
        </>
    );
};

export default Register;