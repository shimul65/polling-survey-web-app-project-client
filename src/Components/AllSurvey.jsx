import moment from "moment";
import { Link } from "react-router-dom";
// import { MdOutlinePending, MdOutlineUnpublished, MdPublishedWithChanges } from "react-icons/md";
// import useAxiosSecure from "../Hooks/useAxiosSecure";
// import Swal from "sweetalert2";
import { BiSolidDislike, BiSolidLike } from "react-icons/bi";
import ScrollToTop from "./ScrollToTop/ScrollToTop";

const AllSurvey = ({ survey }) => {

    ScrollToTop();

    

    // const axiosSecure = useAxiosSecure();
    const { _id, title, question, image, category, deadline, timestamp, likeCount, dislikeCount, yesVote, noVote } = survey;


    return (



        <div className='flex flex-col mx-3 md:mx-0 gap-6 rounded-lg border-0 md:border items-center'>
            <div className='w-full border'>
                <img className='w-full lg:h-[450px]' src={image} alt="" />
            </div>
            <div className='pb-6 pt-3 px-[5%] space-y-4 my-3 lg:my-0 flex flex-col h-full'>
                <div className='flex flex-col md:flex-row justify-between md:items-center '>
                    <p className="flex-1 text-lg font-semibold text-blue-700"><span className="text-black">Title :</span> {title}</p>
                    <p>Created At: <br />
                        {moment(timestamp).format('LL')}</p>
                </div>
                <h2 className='text-3xl font-semibold flex-grow'>
                    {question}
                </h2>
                <div className="flex gap-3 flex-col flex-grow">
                    <p className="text-lg">
                        <span>Survey Category:</span> <span className="text-blue-600 text-xl">{category}</span>
                    </p>
                    <p className="text-2xl">
                        <span>Vote Count: </span><span className="text-blue-600 text-3xl font-semibold">{yesVote + noVote}</span>
                    </p>
                </div>
                <div className="flex items-center justify-between flex-grow">
                    <p className="text-lg">
                        <span>Deadline:</span> <span>{moment(deadline).format('LL')}</span>
                    </p>
                    <div className="flex text-3xl gap-6">
                        <p className="flex items-center gap-2"><BiSolidLike /><span className="text-blue-600 font-semibold">{likeCount}</span></p>
                        <p className="flex items-center gap-2"><BiSolidDislike /><span className="text-blue-600 font-semibold">{dislikeCount}</span></p>
                    </div>
                </div>

                <Link to={`/surveyDetails/${_id}`}>
                    <div className="btn-epic mt-5 shadow-md border shadow-sky-300" style={{ height: '50px', width: '40%' }}>
                        <div>
                            <span>Details</span><span>Details</span>
                        </div>
                    </div></Link>
            </div>
        </div>
    );
};

export default AllSurvey;