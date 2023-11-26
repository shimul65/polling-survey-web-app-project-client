import banner from '../../assets/survey-home-screen.png'
const Banner = () => {
    return (
        <div className="carousel w-full relative">
            {/* banner slider 1*/}
            <div id="slide1" className="carousel-item border border-black-700 hero relative w-full md:h-[700px]"
                style={{ backgroundImage: `url(${banner})`, backgroundSize: '100% 100%' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="">
                    <div className="flex flex-col items-center space-y-7 lg:mb-20">
                        <h2 className="text-3xl md:text-7xl font-extrabold text-center text-white"><span className='linear-style'>Experience the craft </span>
                            <br />
                            <span className='md:text-6xl linear-style2'>of survey creation.</span>
                        </h2>
                        <p className="text-sm px-16 md:px-0 md:text-lg font-medium text-white text-center">Create your survey in minutes. Reach your audience on every <br /> device. View results graphically and in real-time.</p>
                        <div className="btn-epic shadow-md shadow-sky-300 " style={{height:'50px',}}>
                            <div>
                                <span>Explore More</span><span>Explore More</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;