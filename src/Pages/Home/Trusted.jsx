import './slick.css'
import './slick-theme.css'
import Slider from 'react-slick';
import company1 from '../../assets/adidas.png'
import company2 from '../../assets/apple-logo.svg'
import company3 from '../../assets/credit-suisse.png'
import company4 from '../../assets/disney-1-logo-svg-vector.svg'
import company5 from '../../assets/nike.svg'
import company6 from '../../assets/hbo.png'

const Trusted = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="my-6 container mx-auto">
            <div className=" mx-2 overflow-hidden">
                <div className="divider divider-info mx-[30%]">Trusted by the world’s best</div>
                <Slider {...settings}>
                    <div className=" p-10 rounded-3xl">
                        <div className="flex flex-col md:gap-3 justify-center items-center ">
                            <img className="w-[140px] h-16 " src={company1} alt="" />
                        </div>
                    </div>
                    <div className="p-10 rounded-3xl">
                        <div className="flex flex-col gap-3 justify-center items-center ">
                            <img className="  w-[140px] h-16" src={company2} alt="" />
                        </div>
                    </div>
                    <div className="p-10 rounded-3xl">
                        <div className="flex flex-col gap-3 justify-center items-center ">
                            <img className=" w-[140px] h-16" src={company3} alt="" />

                        </div>
                    </div>
                    <div className="p-10 rounded-3xl">

                        <div className="flex flex-col gap-3 justify-center items-center ">
                            <img className=" w-[140px] h-24" src={company4} alt="" />
                        </div>
                    </div>
                    <div className="p-10 rounded-3xl">

                        <div className="flex flex-col gap-3 justify-center items-center ">
                            <img className=" w-[166px] h-20" src={company5} alt="" />
                        </div>
                    </div>
                    <div className="p-10 rounded-3xl">
                        <div className="flex flex-col gap-3 justify-center items-center">
                            <img className=" w-[120px] h-14" src={company6} alt="" />
                        </div>
                    </div>
                </Slider>
            </div>

        </div>
    );
};

export default Trusted;