
import { AiOutlineGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";

const SocialLogin = () => {

    const { googleLogin, githubLogin } = useAuth();

    const navigate = useNavigate();

    const location = useLocation();


    const handleSocialLogin = (media) => {
        media()
            .then(result => {
                const user = result.user;
                console.log(user);

                // navigate after log in
                navigate(location?.state ? location.state : '/');
                toast.success('User Log In Successfully');
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