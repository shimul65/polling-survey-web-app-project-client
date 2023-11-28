import 'animate.css';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import SocialLogin from '../Login/SocialLogin';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useForm } from 'react-hook-form';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const Register = () => {

    const { createUser, handleUpdateProfile } = useAuth();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset } = useForm()

    //show password
    const [showPass, setShowPass] = useState(false);

    const onSubmit = async (data) => {

        const email = data.email;
        const password = data.password;
        const name = data.name;
        const isAccepted = data.terms;
        const imageFile = { image: data.image[0] }

        // password validation check
        if (password.length < 6) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title:
                    `Password should be at
                 least 6 characters or longer`,
                showConfirmButton: false,
                timer: 2500
            });
            return
        }
        else if (!/[A-Z]/.test(password)) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title:
                    `Your Password should contain
                 an uppercase letter`,
                showConfirmButton: false,
                timer: 2500
            });
            return;
        }

        else if (!/[!@#%^&*()_+\-=\[\]{}|;\\':",.<>?~`]/.test(password)) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title:
                    `Your Password should
                 contain a special character`,
                showConfirmButton: false,
                timer: 2500
            });
            return;
        }
        else if (!isAccepted) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title:
                    `Please accept our
                 terms & conditions`,
                showConfirmButton: false,
                timer: 2500
            });
            return;
        }

        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        console.log(res.data);

        if (res.data.success) {
            const photoURL = res.data.data.display_url;
            //create new user
            createUser(email, password)
                .then(result => {
                    const user = result.user;
                    console.log(user);

                    // update profile
                    handleUpdateProfile(name, photoURL)
                        .then(() => {
                            // create new user entry in database
                            const userInfo = {
                                name: name,
                                email: email,
                                photoURL: photoURL,
                            }
                            axiosPublic.post('/users', userInfo)
                                .then(res => {
                                    console.log(res.data)
                                    if (res.data.insertedId) {
                                        navigate(location?.state ? location.state : '/');
                                        Swal.fire({
                                            icon: "success",
                                            title:
                                                `Registration Successful 
                                             Thanks 
                                            ❤️❤️❤️`,
                                            showClass: {
                                                popup: `
                                                  animate__animated
                                                  animate__fadeInUp
                                                  animate__faster
                                                `
                                            },
                                            hideClass: {
                                                popup: `
                                                  animate__animated
                                                  animate__fadeOutDown
                                                  animate__faster
                                                `
                                            },
                                            showConfirmButton: false,
                                            timer: 2500
                                        });
                                        reset();
                                    }
                                })
                        }).catch((error) => {
                            console.log(error);
                        });
                })
                .catch(error => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    toast.error(errorCode, errorMessage);
                })
        }
    }


    return (
        < div className="card-body container pt-[10%] mx-auto rounded-2xl pb-8 px-10 text-black" >
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className=' text-4xl font-extrabold text-[#05bcff] text-center' style={{
                    fontFamily: 'Inter'
                }}>&rdquo; Create Your Account! &rdquo;</h2>
                <div className="divider divider-info">Register</div>
                <div className="form-control mt-6">
                    <label className="label">
                        <span className=" label-text font-semibold">Your Name</span>
                    </label>
                    <input type="text" placeholder="Enter your name" className="input bg-transparent input-info" {...register('name', { required: true })} required />
                </div>
                <div className="form-control mt-6">
                    <label className="label">
                        <span className=" label-text font-semibold">Email</span>
                    </label>
                    <input type="email" placeholder="Enter your email address" className="input bg-transparent input-info" {...register('email', { required: true })} required />
                </div>
                <div className="form-control mt-6">
                    <label className="label">
                        <span className=" label-text font-semibold">Password</span>
                    </label>
                    <div className=" relative ">
                        <input type={showPass ? "text" : "password"}
                            placeholder="Enter your password" className="input w-full bg-transparent input-info" {...register('password', { required: true })} required />
                        <span onClick={() => setShowPass(!showPass)} className="absolute top-3 right-8 text-2xl ">
                            {
                                showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }</span>
                    </div>
                </div>
                <div className="form-control mt-6">
                    <label className="label">
                        <span className=" label-text font-semibold">Photo URL</span>
                    </label>
                    {/* <input type="text" placeholder="Enter your photo url" className="input bg-transparent input-info" name="photoURL" required /> */}
                    <input {...register('image', { required: true })} required type="file" className="file-input w-full file-input-info" />
                </div>
                <div className='mt-4 flex gap-2 items-center'>
                    <input type="checkbox" {...register('terms',)} id="terms" />
                    <label htmlFor="terms">Accept Our Terms and Conditions</label>
                </div>
                <div className="form-control my-6">
                    <button >
                        <div className="btn-epic mx-auto shadow-md shadow-sky-300 " style={{ height: '50px', width: '60%' }}>
                            <div>
                                <span style={{ left: '0' }}>Register</span><span style={{ left: '0' }}>Register</span>
                            </div>
                        </div>
                    </button>
                </div>
            </form>
            <form method="dialog" className="relative ">
                <p className="text-center ">Already Have An Account ?
                </p>
                <button className=" text-blue-700 underline font-medium cursor-pointer absolute bottom-0 right-10">Log In</button>
            </form>
            <div className="divider">continue with</div>
            <div className="w-full">
                <SocialLogin></SocialLogin>
            </div>
        </div >
    );
};

export default Register;