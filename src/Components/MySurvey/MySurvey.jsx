import moment from "moment";
import { Link } from "react-router-dom";



const MySurvey = ({ survey }) => {

    const { _id, title, question, image, category, deadline } = survey;

    return (

        <div className='flex flex-col lg:flex-row mx-3 md:mx-0 gap-6 rounded-lg border-0 md:border items-center'
            data-aos="fade-down"
            data-aos-duration="2000">
            <div className='h-full  flex-1'>
                <img className=' w-full lg:w-[95%] h-full object-cover' src={image} alt="" />
            </div>
            <div className='pr-6 py-2  pl-6 lg:pl-0 space-y-6 my-3 lg:my-0  flex-1 '>
                <div className='flex justify-between'>
                    <p className="flex-1 text-lg font-semibold text-blue-700">{title}p</p>
                    <p>20 July, 2023</p>
                </div>
                <h2 className='text-3xl font-semibold'>
                    {question}
                </h2>
                <p className="text-lg">
                    <span>Survey Category:</span> <span className="text-blue-600">{category}</span>
                </p>
                <p className="text-lg">
                    <span>Deadline:</span> <span>{moment(deadline).format('LL')}</span>
                </p>
                <Link to={`/dashboard/updateSurvey/${_id}`}>
                    <div className="btn-epic mt-5 shadow-md border shadow-sky-300" style={{ height: '50px', width: '40%' }}>
                        <div>
                            <span style={{ left: '' }}>Update</span><span style={{ left: '' }}>Update</span>
                        </div>
                    </div></Link>
            </div>
        </div>
    );
};

export default MySurvey;