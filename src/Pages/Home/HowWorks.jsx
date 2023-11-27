import video1 from '../../assets/video/create-survey.mp4'
import video2 from '../../assets/video/collect-survey.mp4'
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
const HowWorks = () => {
    return (
        <div className="container mx-auto my-10 overflow-hidden">
            <div className='mb-16'>
            <SectionTitle heading={'How it Works'}></SectionTitle>
            </div>
            <div className="">
                <div className='flex flex-col-reverse gap-5 md:gap-0  mx-3 md:mx-0 md:flex-row-reverse items-center'>
                    <div className="flex-1 space-y-10" >
                        <h2 className="text-2xl text-center lg:text-5xl font-bold">
                            Create <span className='linear-style2'>Tailored</span> <br /> Surveys
                        </h2>
                        <p className='text-lg text-center'>
                            With over 25 question types, and features like <br /> skip logic and piping, you can design your perfect survey. <br /> Spruce it up to suit your brand and style with customizable themes.
                        </p>
                        <div className="btn-epic mx-auto shadow-md shadow-sky-300" style={{ height: '50px', }}>
                            <div>
                                <span>Show Details</span><span>Show Details</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 ">
                        {/* <img src={makeup1} className="w-full" /> */}
                        <video
                            className="border"
                            controls autoPlay preload='auto' loop muted
                        >
                            <source src={video1} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                <div className='flex flex-col-reverse md:flex-row items-center gap-5 md:gap-0  mx-3 md:mx-0 mt-6 md:mt-0'>
                    <div className="flex-1  space-y-10 " >
                        <h2 className="text-2xl text-center  lg:text-5xl font-bold">
                            Seamless Survey <br /> <span className='linear-style2'>Distribution</span>
                        </h2>
                        <p className='text-lg text-center '>
                            Share your surveys instantly with everyone on <br /> your list, using social media and email campaigns. Our <br /> SSL protection will ensure that your surveys remain safe and private.
                        </p>
                        <div className="btn-epic mx-auto  shadow-md shadow-sky-300 border-sky-400" style={{ height: '50px', }}>
                            <div>
                                <span>Show Details</span><span>Show Details</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        {/* <img src={makeup2} className="w-full" /> */}
                        <video
                            className="border"
                            controls autoPlay preload='auto' loop muted
                        >
                            <source src={video2} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowWorks;