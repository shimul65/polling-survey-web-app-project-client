import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import Slider from "react-slick";
import './slick.css'
import './slick-theme.css'
import quote from '../../assets/testimonial/quote.svg'
import test1 from '../../assets/testimonial/test1.svg'
import test2 from '../../assets/testimonial/test2.svg'

const Testimonial = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div>
            <SectionTitle heading={'Testimonial'}></SectionTitle>
            <div className="container mx-auto">
                <Slider className='py-10' {...settings}>
                    <div className="px-6 text-center">
                        <div className="border p-10  rounded-xl">
                            <div className="flex justify-between  items-center">
                                <div className="flex gap-5">
                                    <div className="flex items-center">
                                        <img
                                            src={test1}
                                            alt="image"
                                        />
                                    </div>
                                    <div className="text-left">
                                        <p className="mt-4 text-2xl font-bold">
                                            John Doe
                                        </p>
                                        <p color="gray" className="mb-4 font-semibold text-base">
                                            Marketing Manager
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <img className="w-14 h-14" src={quote} alt="" />
                                </div>
                            </div>
                            <p color="blue-gray" className="my-6 max-w-[85%] font-medium text-left">
                                &quot;The survey platform exceeded our expectations. Its diverse question types and customization options allowed us to gather insightful data effortlessly. The user-friendly interface made it a hit among our team!&quot;
                            </p>
                            <div className="rating rating-lg flex justify-start items-start">
                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                    </div>
                    <div className="px-6 text-center">
                        <div className="border p-10  rounded-xl">
                            <div className="flex justify-between  items-center">
                                <div className="flex gap-5">
                                    <div className="flex items-center">
                                        <img
                                            src={test2}
                                            alt="image"
                                        />
                                    </div>
                                    <div className="text-left">
                                        <p className="mt-4 text-2xl font-bold">
                                            Alex Thompson
                                        </p>
                                        <p color="gray" className="mb-4 font-semibold text-base">
                                            Product Manager
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <img className="w-14 h-14" src={quote} alt="" />
                                </div>
                            </div>
                            <p color="blue-gray" className="my-6 max-w-[85%] font-medium text-left">
                                &quot;As a product manager, understanding user preferences is crucial. This survey tool&#39;s flexibility and theme customization let us align our brand seamlessly. The analytics provided valuable insights for product development.&quot;
                            </p>
                            <div className="rating rating-lg flex justify-start items-start">
                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                    </div>
                    <div className="px-6 text-center">
                        <div className="border p-10  rounded-xl">
                            <div className="flex justify-between  items-center">
                                <div className="flex gap-5">
                                    <div className="flex items-center">
                                        <img
                                            src={test1}
                                            alt="image"
                                        />
                                    </div>
                                    <div className="text-left">
                                        <p className="mt-4 text-2xl font-bold">
                                            David Chen
                                        </p>
                                        <p color="gray" className="mb-4 font-semibold text-base">
                                            Business Owner
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <img className="w-14 h-14" src={quote} alt="" />
                                </div>
                            </div>
                            <p color="blue-gray" className="my-6 max-w-[85%] font-medium text-left">
                                &quot;The survey platform became an integral part of our decision-making process. Its simplicity, combined with advanced features, made it accessible for all team members. Highly recommended for any business!&quot;
                            </p>
                            <div className="rating rating-lg flex justify-start items-start">
                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                    </div>
                    <div className="px-6 text-center">
                        <div className="border p-10  rounded-xl">
                            <div className="flex justify-between  items-center">
                                <div className="flex gap-5">
                                    <div className="flex items-center">
                                        <img
                                            src={test2}
                                            alt="image"
                                        />
                                    </div>
                                    <div className="text-left">
                                        <p className="mt-4 text-2xl font-bold">
                                            Awlad Hossain
                                        </p>
                                        <p color="gray" className="mb-4 font-semibold text-base">
                                        HR Specialist
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <img className="w-14 h-14" src={quote} alt="" />
                                </div>
                            </div>
                            <p color="blue-gray" className="my-6 max-w-[85%] font-medium text-left">
                                &quot;Our HR surveys have never been more engaging. With skip logic and beautiful themes, our employees find the experience seamless. The SSL protection adds an extra layer of security to ensure confidentiality.&quot;
                            </p>
                            <div className="rating rating-lg flex justify-start items-start">
                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Testimonial;