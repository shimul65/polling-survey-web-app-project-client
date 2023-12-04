import { useParams } from "react-router-dom";
import moment from "moment";
// import { Link } from "react-router-dom";
import { BiDislike, BiLike, BiSolidDislike, BiSolidLike } from "react-icons/bi";
import banner2 from "../../assets/contact/banner2.jpg"
import { Typewriter } from "react-simple-typewriter";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";

const COLORS = ['#0088FE', 'purple'];

const SurveyDetails = () => {

    ScrollToTop();

    const { id } = useParams();
    const { user } = useAuth();

    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const { data: survey = [], refetch, isLoading } = useQuery({

        queryKey: ['publishedSurveys', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/publishedSurveys/${id}`)
            return res.data;
        }
    })

    if (isLoading) {
        return <span className="loading loading-spinner text-primary flex mx-auto py-[20%]"></span>
    }

    const { _id, title, question, image, category, deadline, timestamp, likeCount, dislikeCount, yesVote, noVote, yesVoteGiven, noVoteGiven, likeGiven, disLikeGiven } = survey;

    const isYesVoteGiven = yesVoteGiven?.find(userEmail => userEmail === user?.email);
    const isNoVoteGiven = noVoteGiven?.find(userEmail => userEmail === user?.email);
    const isLikeGiven = likeGiven?.find(userEmail => userEmail === user?.email);
    const isDislikeGiven = disLikeGiven?.find(userEmail => userEmail === user?.email);


    const handleYesVote = e => {

        if (!user) {
            return toast.error('Please log in to give a vote.', {
                style: {
                    border: '1px solid #7dd3fc',
                    padding: '16px',
                    color: 'blue',
                },
                iconTheme: {
                    primary: 'red',
                    secondary: '#FFFAEE',
                },
            });
        }
        else {
            const isChecked = e.target.checked;
            if (isChecked && !isYesVoteGiven) {
                const updatePublishedSurvey = {
                    yesVote: yesVote + 1,
                    noVote: noVote,
                    likeCount: likeCount,
                    dislikeCount: dislikeCount,
                    yesVoteGiven: [...yesVoteGiven, user.email],
                    noVoteGiven: [...noVoteGiven],
                    likeGiven: [...likeGiven],
                    disLikeGiven: [...disLikeGiven],
                }
                axiosSecure.patch(`/publishedSurveys/${_id}`, updatePublishedSurvey)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Your vote has been counted",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            refetch();
                        }
                    })
            }
        }
    };

    const handleNoVote = e => {

        if (!user) {
            return toast.error('Please log in to give a vote.', {
                style: {
                    border: '1px solid #7dd3fc',
                    padding: '16px',
                    color: 'blue',
                },
                iconTheme: {
                    primary: 'red',
                    secondary: '#FFFAEE',
                },
            });
        }
        else {
            const isChecked = e.target.checked;
            if (isChecked && !isNoVoteGiven) {
                const updatePublishedSurvey = {
                    yesVote: yesVote,
                    noVote: noVote + 1,
                    likeCount: likeCount,
                    dislikeCount: dislikeCount,
                    yesVoteGiven: [...yesVoteGiven],
                    noVoteGiven: [...noVoteGiven, user.email],
                    likeGiven: [...likeGiven],
                    disLikeGiven: [...disLikeGiven],
                }
                axiosSecure.patch(`/publishedSurveys/${_id}`, updatePublishedSurvey)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Your vote has been counted",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            refetch();
                        }
                    })
            }
        }
    };

    const handleGivenLike = () => {

        if (!user) {
            return toast.error('Please log in to give a like.', {
                style: {
                    border: '1px solid #7dd3fc',
                    padding: '16px',
                    color: 'blue',
                },
                iconTheme: {
                    primary: 'red',
                    secondary: '#FFFAEE',
                },
            });
        }
        else {
            if (isDislikeGiven) {
                const newDislikeUser = disLikeGiven?.filter(dislikeUser => dislikeUser !== user?.email)
                const updatePublishedSurvey = {
                    yesVote: yesVote,
                    noVote: noVote,
                    likeCount: likeCount + 1,
                    dislikeCount: dislikeCount - 1,
                    yesVoteGiven: [...yesVoteGiven],
                    noVoteGiven: [...noVoteGiven],
                    likeGiven: [...likeGiven, user.email],
                    disLikeGiven: [newDislikeUser],
                }
                axiosSecure.patch(`/publishedSurveys/${_id}`, updatePublishedSurvey)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            toast.success('Thanks for giving a like.', {
                                position: "top-right"
                            })
                            refetch();
                        }
                    })
            }
            else {
                const updatePublishedSurvey = {
                    yesVote: yesVote,
                    noVote: noVote,
                    likeCount: likeCount + 1,
                    dislikeCount: dislikeCount,
                    yesVoteGiven: [...yesVoteGiven],
                    noVoteGiven: [...noVoteGiven],
                    likeGiven: [...likeGiven, user.email],
                    disLikeGiven: [...disLikeGiven],
                }
                axiosSecure.patch(`/publishedSurveys/${_id}`, updatePublishedSurvey)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            toast.success('Thanks for giving a like.', {
                                position: "top-right"
                            })
                            refetch();
                        }
                    })
            }
        }
    };

    const handleGivenDisLike = () => {

        if (!user) {
            return toast.error('Please log in to give a like.', {
                style: {
                    border: '1px solid #7dd3fc',
                    padding: '16px',
                    color: 'blue',
                },
                iconTheme: {
                    primary: 'red',
                    secondary: '#FFFAEE',
                },
            });
        }
        else {
            if (isLikeGiven) {
                const newLikeUser = likeGiven?.filter(likeUser => likeUser !== user?.email)
                const updatePublishedSurvey = {
                    yesVote: yesVote,
                    noVote: noVote,
                    likeCount: likeCount - 1,
                    dislikeCount: dislikeCount + 1,
                    yesVoteGiven: [...yesVoteGiven],
                    noVoteGiven: [...noVoteGiven],
                    likeGiven: [newLikeUser],
                    disLikeGiven: [...disLikeGiven, user.email],
                }
                axiosSecure.patch(`/publishedSurveys/${_id}`, updatePublishedSurvey)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            toast.success('Thank you for your feedback.', {
                                position: "top-right"
                            })
                            refetch();
                        }
                    })
            }
            else {
                const updatePublishedSurvey = {
                    yesVote: yesVote,
                    noVote: noVote,
                    likeCount: likeCount,
                    dislikeCount: dislikeCount + 1,
                    yesVoteGiven: [...yesVoteGiven],
                    noVoteGiven: [...noVoteGiven],
                    likeGiven: [...likeGiven],
                    disLikeGiven: [...disLikeGiven, user.email],
                }
                axiosSecure.patch(`/publishedSurveys/${_id}`, updatePublishedSurvey)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            toast.success('Thank you for your feedback.', {
                                position: "top-right"
                            })
                            refetch();
                        }
                    })
            }
        }
    };

    const handleRemoveLike = () => {

        const newLikeUser = likeGiven?.filter(likeUser => likeUser !== user?.email)
        const updatePublishedSurvey = {
            yesVote: yesVote,
            noVote: noVote,
            likeCount: likeCount - 1,
            dislikeCount: dislikeCount,
            yesVoteGiven: [...yesVoteGiven],
            noVoteGiven: [...noVoteGiven],
            likeGiven: [newLikeUser],
            disLikeGiven: [...disLikeGiven],
        }
        axiosSecure.patch(`/publishedSurveys/${_id}`, updatePublishedSurvey)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                }
            })
    }

    const handleRemoveDislike = () => {
        const newDislikeUser = disLikeGiven?.filter(dislikeUser => dislikeUser !== user?.email)
        const updatePublishedSurvey = {
            yesVote: yesVote,
            noVote: noVote,
            likeCount: likeCount,
            dislikeCount: dislikeCount - 1,
            yesVoteGiven: [...yesVoteGiven],
            noVoteGiven: [...noVoteGiven],
            likeGiven: [...likeGiven],
            disLikeGiven: [newDislikeUser],
        }
        axiosSecure.patch(`/publishedSurveys/${_id}`, updatePublishedSurvey)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                }
            })
    }


    // pie chart
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const pieChartData = [
        { name: 'YES VOTE', value: yesVote },
        { name: 'NO VOTE', value: noVote },
    ];



    return (

        <div className="w-full relative">
            <div className=" border border-black-700 hero relative w-full md:h-[600px]"
                style={{ backgroundImage: `url(${banner2})`, backgroundSize: '100% 100%' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="mt-28 md:mt-8 mb-12 md:mb-6 lg:mt-0 lg:mb-0">
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

            <div className="container mx-auto lg:py-16">
                <div className="mb-8 pt-8">
                    <SectionTitle heading={'SURVEY DETAILS'}></SectionTitle>
                </div>
                <div className="my-16 grid grid-cols-1 lg:grid-cols-3">

                    {/* survey details */}
                    <div className={`${isYesVoteGiven || isNoVoteGiven ? 'flex flex-col mx-3 md:mx-0 gap-6 rounded-lg border-0 md:border items-center lg:col-span-2' : 'flex mx-3 md:mx-0 gap-6 rounded-lg border-0 md:border items-center lg:col-span-3'}`}>
                        <div className='w-full border'>
                            <img className='w-full h-[450px]' src={image} alt="" />
                        </div>
                        <div className='pb-6 w-full px-[3%] pt-3  space-y-4 my-3 lg:my-0 flex flex-col h-full'>
                            <div className='flex justify-between items-center '>
                                <p className="flex-1 text-lg font-semibold text-blue-700">{title}</p>
                                <p>Created At: <br />
                                    {moment(timestamp).format('LL')}</p>
                            </div>
                            <div className="flex gap-3 flex-col flex-grow">
                                <p className="text-lg">
                                    <span>Survey Category:</span> <span className="text-blue-600 text-xl">{category}</span>
                                </p>
                                <p className="text-lg">
                                    <span>Deadline:</span> <span>{moment(deadline).format('LL')}</span>
                                </p>
                            </div>
                            <h2 className='text-3xl font-semibold flex-grow'>
                                {question}
                            </h2>
                            {/* voting */}
                            {
                                !isYesVoteGiven && !isNoVoteGiven &&
                                <div className="flex gap-3 items-center">
                                    <h3 className="text-2xl">Give Vote :</h3>
                                    <div className="flex gap-5">
                                        <div className="form-control ">
                                            <label className="cursor-pointer gap-5  label">
                                                <input type="checkbox" className="checkbox rounded-full checkbox-info" onChange={handleYesVote} />
                                                <span className="label-text  text-2xl font-bold">YES</span>
                                            </label>
                                        </div>
                                        <div className="form-control ">
                                            <label className="cursor-pointer gap-5 label">
                                                <input type="checkbox" className="checkbox rounded-full checkbox-info" onChange={handleNoVote} />
                                                <span className="label-text text-2xl font-bold">NO</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            }
                            {
                                isYesVoteGiven && <div className="flex items-center gap-2 ">
                                    <RiCheckboxCircleFill className="text-[28px] text-blue-700" />
                                    <p className="label-text text-blue-700 text-xl font-bold">YES VOTE GIVEN</p>
                                </div>
                            }
                            {
                                isNoVoteGiven && <div className="flex  items-center gap-2 ">
                                    <RiCheckboxCircleFill className="text-[28px] text-red-700" />
                                    <p className="label-text text-red-700 text-xl font-bold">NO VOTE GIVEN</p>
                                </div>
                            }
                            <div className="flex items-center justify-between flex-grow">
                                <p className="text-2xl">
                                    <span>Vote Count: </span><span className="text-blue-600 text-3xl font-semibold">{yesVote + noVote}</span>
                                </p>
                                <div className="flex text-3xl gap-6">
                                    {
                                        isLikeGiven ?
                                            <p className="flex items-center gap-2"><BiSolidLike className="cursor-pointer" onClick={handleRemoveLike} /><span className="text-blue-600 font-semibold">{likeCount}</span></p>
                                            : <p className="flex items-center gap-2"><BiLike className="cursor-pointer" onClick={handleGivenLike} /><span className="text-blue-600 font-semibold">{likeCount}</span></p>
                                    }
                                    {
                                        isDislikeGiven ?
                                            <p className="flex items-center gap-2"><BiSolidDislike className="cursor-pointer" onClick={handleRemoveDislike} /><span className="text-blue-600 font-semibold">{dislikeCount}</span></p>
                                            : <p className="flex items-center gap-2"><BiDislike className="cursor-pointer" onClick={handleGivenDisLike} /><span className="text-blue-600 font-semibold">{dislikeCount}</span></p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* chart */}
                    <div className={`${!isYesVoteGiven && !isNoVoteGiven ? 'hidden' : 'h-full lg:h-1/2'}`}>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart width={400} height={400} className="">
                                <Pie
                                    data={pieChartData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {pieChartData?.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Legend ></Legend>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SurveyDetails;