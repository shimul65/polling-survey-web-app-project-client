import { useLoaderData } from "react-router-dom";
import moment from "moment";
import { Link } from "react-router-dom";
import { BiSolidDislike, BiSolidLike } from "react-icons/bi";
import banner2 from "../../assets/contact/banner2.jpg"
import { Typewriter } from "react-simple-typewriter";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";


const SurveyDetails = () => {

    const { _id, title, question, image, category, deadline, timestamp, likeCount, dislikeCount, yesVote, noVote } = useLoaderData();

    return (

        <div className="w-full relative">
            <div className=" border border-black-700 hero relative w-full md:h-[600px]"
                style={{ backgroundImage: `url(${banner2})`, backgroundSize: '100% 100%' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="">
                    <div className="flex flex-col items-center space-y-7 lg:mb-0">
                        <h2 className="text-3xl md:text-7xl font-extrabold text-center text-white"><span className='linear-style'>Shape Our Future</span>
                            <br />
                            <span className='md:text-6xl linear-style2'>Take the <Typewriter
                                cursor
                                cursorStyle='|'
                                cursorBlinking
                                delaySpeed={1000}
                                deleteSpeed={25}
                                loop={0}
                                typeSpeed={75}
                                words={[
                                    'SURVEY !',
                                ]}
                            /></span>
                        </h2>
                        <p className="text-2xl px-16 md:px-0 font-medium text-white text-center">Engage for Impactful Insights!</p>
                        <div className="btn-epic shadow-md shadow-sky-300 " style={{ height: '50px', }}>
                            <div>
                                <span>Explore More</span><span>Explore More</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="mb-8 pt-8">
                    <SectionTitle heading={'SURVEY DETAILS'}></SectionTitle>
                </div>
                <div className="my-16 grid grid-cols-3">
                    <div className='flex flex-col mx-3 md:mx-0 gap-6 rounded-lg border-0 md:border items-center col-span-2'>
                        <div className='w-full border'>
                            <img className='w-full h-[450px]' src={image} alt="" />
                        </div>
                        <div className='pb-6 pt-3 px-[5%] space-y-4 my-3 lg:my-0 flex flex-col h-full'>
                            <div className='flex justify-between '>
                                <p className="flex-1 text-lg font-semibold text-blue-700">{title}</p>
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
                                        <span style={{ left: '' }}>Details</span><span style={{ left: '' }}>Details</span>
                                    </div>
                                </div></Link>
                        </div>
                    </div>
                    <div className="border border-red-600">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SurveyDetails;