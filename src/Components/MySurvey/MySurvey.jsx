import moment from "moment";
import { Link } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import { MdOutlinePending, MdOutlineUnpublished, MdPublishedWithChanges } from "react-icons/md";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const MySurvey = ({ survey, refetch }) => {

    const [isAdmin] = useAdmin();
    const axiosSecure = useAxiosSecure();
    const { _id, title, question, image, category, deadline, timestamp, email, status, unpublishedStatus } = survey;

    const handlePublish = (id) => {

        const updateSurvey = {
            title: title,
            question: question,
            image: image,
            category: category,
            deadline: deadline,
            status: 'published',
        }
        axiosSecure.patch(`/surveys/${id}`, updateSurvey)
            .then(res => {

                if (res.data.modifiedCount > 0) {
                    const publishedSurvey = {
                        surveyorEmail: email,
                        title: title,
                        question: question,
                        image: image,
                        category: category,
                        deadline: deadline,
                        createdAt: timestamp,
                        yesVote: 0,
                        noVote: 0,
                        likeCount: 0,
                        dislikeCount: 0,
                    }
                    axiosSecure.post(`/publishedSurveys`, publishedSurvey)
                        .then(res => {
                            console.log(res.data);
                            if (res.data.insertedId) {
                                Swal.fire({
                                    title: 'Success!',
                                    text: `This Survey has been published`,
                                    icon: 'success',
                                    confirmButtonText: 'Cool'
                                })
                                refetch();
                            }
                        })
                }
            })
    }

    const handleUnpublished = (id) => {

        const updateSurvey = {
            title: title,
            question: question,
            image: image,
            category: category,
            deadline: deadline,
            status: 'unpublished',
            unpublishedStatus: "Unfortunately, this survey doesn't comply with our guidelines and standards"
        }
        axiosSecure.patch(`/surveys/${id}`, updateSurvey)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: `Survey Unpublished`,
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    refetch()
                }
            })
    }



    return (

        <div className='flex flex-col lg:flex-row mx-3 md:mx-0 gap-6 rounded-lg border-0 md:border items-center'>
            <div className='h-full  flex-1'>
                <img className=' w-full lg:w-[95%] h-full object-cover' src={image} alt="" />
            </div>
            <div className='pr-6 py-2  pl-6 lg:pl-0 space-y-4 my-3 lg:my-0  flex-1 '>
                <div className='flex justify-between gap-3'>
                    <p className="flex-1 text-lg font-semibold text-blue-700">{title}</p>
                    <p>Created At: <br />
                        {moment(timestamp).format('LL')}</p>
                </div>
                <h2 className='text-3xl font-semibold'>
                    {question}
                </h2>
                <p className="text-lg">
                    <span>Survey Category:</span> <span className="text-blue-600">{category}</span>
                </p>
                {
                    isAdmin &&
                    <p className="text-lg">
                        <span>Surveyor:</span> <span className="text-blue-600">{email}</span>
                    </p>
                }
                <div className="flex items-center justify-between ">
                    <p className="text-lg">
                        <span>Deadline:</span> <span>{moment(deadline).format('LL')}</span>
                    </p>
                    {
                        !isAdmin &&
                        <>
                            {status === 'pending' &&
                                <div className="flex flex-col items-center text-green-700">
                                    <MdOutlinePending className="text-3xl" /> <span>Pending</span>
                                </div>
                            }
                            {status === 'unpublished' &&
                                <div className="tooltip-left tooltip-error tooltip" data-tip="Unpublished">
                                    <button className="flex btn flex-col items-center text-red-700 cursor-pointer" onClick={() => document.getElementById('my_modal_5').showModal()}>
                                        <MdOutlineUnpublished className="text-3xl" />
                                    </button>
                                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-2xl">Sorry!</h3>
                                            <p className="py-4 w-[80%] mx-auto text-red-600 text-lg">{unpublishedStatus}</p>
                                            <div className="modal-action">
                                                <form method="dialog">
                                                    {/* if there is a button in form, it will close the modal */}
                                                    <button className="btn btn-info btn-outline">Close</button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>
                                </div>
                            }
                        </>
                    }
                </div>
                {
                    !isAdmin &&
                    <>
                        {

                            status === 'published' ?

                                <div className="text-2xl text-green-700 font-bold flex items-center gap-2"><MdPublishedWithChanges />Published</div> :

                                <Link to={`/dashboard/updateSurvey/${_id}`}>
                                    <div className="btn-epic mt-5 shadow-md border shadow-sky-300" style={{ height: '50px', width: '40%' }}>
                                        <div>
                                            <span style={{ left: '' }}>Update</span><span style={{ left: '' }}>Update</span>
                                        </div>
                                    </div></Link>
                        }
                    </>
                }

                {
                    isAdmin &&
                    <>
                        {
                            status === 'pending' && <div className="flex justify-start items-center gap-5">
                                <button onClick={() => handlePublish(_id)} className="btn btn-info btn-outline">Publish</button>
                                <button onClick={() => handleUnpublished(_id)} className="btn btn-error btn-outline">Unpublished</button>
                            </div>
                        }
                        {
                            status === 'published' && <div className="text-2xl text-green-700 font-bold flex items-center gap-2"><MdPublishedWithChanges />Published</div>
                        }
                        {
                            status === 'unpublished' && <div className="text-2xl text-red-700 font-bold flex items-center gap-2"><MdOutlineUnpublished />UnPublished</div>
                        }
                    </>
                }
            </div>
        </div>
    );
};

export default MySurvey;