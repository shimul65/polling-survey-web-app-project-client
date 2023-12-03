
import { AiOutlineGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const SocialLogin = () => {

    const { googleLogin, githubLogin } = useAuth();

    const navigate = useNavigate();

    const axiosPublic = useAxiosPublic();

    const location = useLocation();


    const handleSocialLogin = (media) => {
        media()
            .then(result => {
                const user = result.user;
                console.log(user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    photoURL: result.user?.photoURL,
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        // navigate after log in
                        navigate(location?.state ? location.state : '/');
                        if (res.data.insertedId !== null) {
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
                        }
                    })
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorCode, errorMessage);
            })
    }


    return (
        <div className="flex justify-center items-center gap-10">
            <div className="flex">
                <button onClick={() => handleSocialLogin(googleLogin)} className="btn btn-outline btn-info">
                    <FcGoogle className="w-6 h-6 " /> <span className="md:hidden lg:block">Google</span>
                </button>
            </div>
            <div className="flex">
                <button onClick={() => handleSocialLogin(githubLogin)} className="btn btn-outline btn-info ">
                    <AiOutlineGithub className="w-6 h-6" /> <span className="md:hidden lg:block">Github</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;