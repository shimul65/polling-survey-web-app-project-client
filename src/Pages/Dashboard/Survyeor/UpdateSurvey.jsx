import { useLoaderData, useNavigate } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useScrollToTop from "../../../Hooks/useScrollToTop";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateSurvey = () => {
    useScrollToTop();
    const { _id, title, question, category, deadline } = useLoaderData();


    const navigate = useNavigate();

    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, } = useForm();

    const [startDate, setStartDate] = useState(new Date(deadline));

    const onSubmitUpdate = async (data) => {

        // upload image to imgbb then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            const updateSurvey = {
                title: data.title,
                question: data.question,
                image: res.data.data.display_url,
                category: data.category,
                deadline: startDate,
                status: 'pending'
            }
            axiosSecure.patch(`/surveys/${_id}`, updateSurvey)
                .then(res => {
                    console.log(res.data);
                    if (res.data.modifiedCount > 0) {
                        Swal.fire({
                            title: 'Success!',
                            text: `Your Survey Update Successfully`,
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                        navigate('/dashboard/surveyorHome')
                    }
                })
        }
    }

    return (
        <div className="mb-16">
            <div className="mt-16">
                <SectionTitle heading={'UPDATE YOUR SURVEY'} ></SectionTitle>
            </div>

            <div className="mx-[5%] border p-12 bg-white mt-16">
                <form onSubmit={handleSubmit(onSubmitUpdate)}>
                    <div className="flex gap-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-blue-800 text-base">Survey Title*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Survey Title"
                                defaultValue={title}
                                {...register('title', { required: true })}
                                required
                                className="input input-info" />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-blue-800 text-base">Survey Category*</span>
                            </label>
                            <select defaultValue={category} {...register('category', { required: true })}
                                className="select select-bordered border border-sky-400 w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="Technology and Software">Technology and Software</option>
                                <option value="Healthcare and Patient Satisfaction">Healthcare and Patient Satisfaction</option>
                                <option value="Education and Training">Education and Training</option>
                                <option value="Customer Satisfaction">Customer Satisfaction</option>
                                <option value="Product Feedback">Product Feedback</option>
                                <option value="Travel and Hospitality">Travel and Hospitality</option>
                                <option value="Food and Dining">Food and Dining</option>
                            </select>
                        </div>
                    </div>
                    <div className="">
                        <label className="label">
                            <span className="label-text text-blue-800 text-base">Survey Deadline*</span>
                        </label>
                        <DatePicker
                            className="border border-sky-400 w-full rounded-lg text-lg "
                            showIcon
                            dateFormat="dd/MM/yyyy"
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-blue-800 text-base">Survey Questions</span>
                        </label>
                        <textarea defaultValue={question} {...register('question')} className="textarea textarea-bordered h-52 border-sky-400" placeholder="Survey Questions Type Here ... (Yes/No)"></textarea>
                    </div>

                    <div className="form-control w-full my-6">
                        <input {...register('image', { required: true })} type="file" className="file-input input-info max-w-xs" />
                    </div>

                    <div className="form-control my-6">
                        <button >
                            <div className="btn-epic shadow-md shadow-sky-300 " style={{ height: '50px', width: '25%' }}>
                                <div>
                                    <span style={{ left: '0' }}>Update Survey</span><span style={{ left: '0' }}>Update Survey</span>
                                </div>
                            </div>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateSurvey;