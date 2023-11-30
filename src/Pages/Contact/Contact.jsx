import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import banner from "../../assets/contact/zh-contactusworld-bgbanner.jpg";
import img1 from "../../assets/contact/zh-raise-ticket.png";
import img2 from "../../assets/contact/zh-technical-support.png";
import usa from "../../assets/contact/usa.png";
import mexico from "../../assets/contact/mexico.png";
import japan from "../../assets/contact/japan.png";
import india from "../../assets/contact/india.png";
import china from "../../assets/contact/china.png";
import singapore from "../../assets/contact/singapore.png";
import brazil from "../../assets/contact/brazil.png";
import { CiLocationOn, CiTimer } from "react-icons/ci";
import { BsTelephone, BsCheckSquare } from "react-icons/bs";
import Trusted from "../Home/Trusted";
import 'animate.css';
import useScrollToTop from "../../Hooks/useScrollToTop";

const Contact = () => {
    useScrollToTop();
    return (
        <div className="w-full relative">
            <div id="slide1" className=" border border-black-700 hero relative w-full md:h-[600px]"
                style={{ backgroundImage: `url(${banner})`, backgroundSize: '100% 100%' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="">
                    <div className="flex flex-col items-center space-y-7 lg:mb-0">
                        <h2 className="text-3xl md:text-7xl font-extrabold text-center text-white"><span className='linear-style'>Looking for something</span>
                            <br />
                            <span className='md:text-6xl linear-style2'>in particular?</span>
                        </h2>
                        <p className="text-2xl px-16 md:px-0 font-medium text-white text-center">WE are here to help</p>
                        <div className="btn-epic shadow-md shadow-sky-300 " style={{ height: '50px', }}>
                            <div>
                                <span>Explore More</span><span>Explore More</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row my-16 container mx-auto">
                <div className="px-6 text-center">
                    <div className="border p-10 relative  rounded-xl">
                        <div className="flex justify-between  items-center">
                            <div className="flex flex-col gap-5">
                                <div className="flex items-center">
                                    <img
                                        src={img1}
                                        alt="image"
                                        className="w-40"
                                    />
                                </div>
                                <div className="text-left">
                                    <p className="mt-4 text-2xl font-bold">
                                        Visit our help forum for technical support
                                    </p>
                                </div>
                            </div>
                        </div>
                        <p className="my-6 pb-6 max-w-[85%] font-medium text-left">
                            Experiencing issues with a product you&quot;re already using? Browse through our help docs, videos, and tutorials, or engage with experts from the Zoho support community.
                        </p>
                        <button className="btn absolute left-10 bottom-5 btn-outline  btn-info mt-4 text-lg  ">Help Center</button>
                    </div>
                </div>
                <div className="divider lg:divider-horizontal">OR</div>
                <div className="px-6 text-center">
                    <div className="border p-10 relative rounded-xl">
                        <div className="flex justify-between  items-center">
                            <div className="flex flex-col gap-5">
                                <div className="flex items-center">
                                    <img
                                        src={img2}
                                        alt="image"
                                        className="w-40"
                                    />
                                </div>
                                <div className="text-left">
                                    <p className="mt-4 text-2xl font-bold">
                                        If you can&#39;t find what you&#39;re looking for...
                                    </p>
                                </div>
                            </div>
                        </div>
                        <p className="my-6 pb-6 max-w-[85%] font-medium text-left">
                            Experiencing issues with a product you&quot;re already using? Browse through our help docs, videos, and tutorials, or engage with experts from the Zoho support community.
                        </p>
                        <button className="btn absolute left-10 bottom-5 btn-outline btn-info mt-4 text-lg ">Help Center</button>
                    </div>
                </div>
            </div>
            <div className="md:bg-[#0973bf] pb-16">
                <div className="mb-8 pt-8">
                    <SectionTitle heading={'General Inquiries'}></SectionTitle>
                </div>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-4 mb-14 mx-2">
                        <div className="flex bg-white py-10 border rounded-lg shadow-2xl flex-col items-center justify-center animate__animated animate__fadeInDown ">
                            <div className="text-5xl text-blue-600">
                                <CiLocationOn></CiLocationOn>
                            </div>
                            <p className="mt-6 text-center text-xl font-semibold text-blue-600">
                                Postal Address
                            </p>
                            <p className="my-4 text-center text-[#a3a3a6]">
                                New York, USA <br />
                                85 Fentiman Ave <br />
                                Ottawa, ON K1S 0T7</p>
                        </div>
                        <div className="flex bg-white py-10 rounded-lg shadow-2xl border flex-col items-center justify-center animate__animated animate__delay-1s animate__fadeInDown">
                            <div className="text-5xl text-blue-600">
                                <BsTelephone></BsTelephone>
                            </div>
                            <p className="mt-6 text-center text-xl font-semibold text-blue-600">
                                Phone & E-mail
                            </p>
                            <p className="my-4 text-center text-[#a3a3a6]">Phone: 1-800-64-38 <br />
                                Fax: 1-800-64-39 <br />
                                office@fable.com</p>
                        </div>
                        <div className="flex bg-white rounded-lg shadow-2xl py-10 border flex-col items-center justify-center animate__animated animate__delay-2s animate__fadeInDown">
                            <div className="text-5xl text-blue-600">
                                <CiTimer></CiTimer>
                            </div>
                            <p className="mt-6 text-center text-xl font-semibold text-blue-600">
                                Open Hours
                            </p>
                            <p className="my-4 text-center text-[#a3a3a6]">Monday – Friday <br />
                                8.00 am – 5.00 pm <br />
                                Weekend Closed</p>
                        </div>
                        <div className="flex bg-white px-1 rounded-lg shadow-2xl py-10 border flex-col items-center justify-center animate__animated animate__delay-3s animate__fadeInDown">
                            <div className="text-5xl text-blue-600">
                                <BsCheckSquare></BsCheckSquare>
                            </div>
                            <p className="mt-6 text-center text-xl font-semibold text-blue-600">
                                Sessions
                            </p>
                            <p className="my-4 text-center text-[#a3a3a6]">Mornings, 8 am – 12 pm <br />
                                Afternoons, 1 pm – 5 pm <br />
                                Full Day, 8 am – 5 pm</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-16">
                <div className="my-16">
                    <SectionTitle heading={'Our offices around the world'}></SectionTitle>
                </div>
                <p className="text-center mb-10 text-lg">Connect with one of our global offices...  <br />
                    or feel free to just send us a nifty postcard. We won&#39;t mind!</p>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 my-14 mx-2">
                        <div className="space-y-10">
                            <div className="flex bg-white py-10 border rounded-lg shadow-2xl flex-col  justify-center">
                                <div className="text-5xl mt-5 flex flex-row-reverse justify-around items-center">
                                    <img src={usa} className="w-14" alt="" />
                                    <p className=" text-center text-2xl font-semibold text-blue-600">
                                        USA
                                    </p>
                                </div>
                                <div className="divider mx-9"></div>
                                <p className="mt-6 text-left pl-[15%] text-[#a3a3a6]">
                                    <span className="text-xl font-bold text-gray-600">California</span> <br />
                                    4141 Hacienda Drive, <br />
                                    Pleasanton, CA 94588,<br />
                                    <br />

                                    <span className="text-xl font-bold text-gray-600">California</span><br />
                                    Del Valle<br />
                                    4708 HWY 71 E<br />
                                    Del Valle, TX 78617-3216<br />
                                    <br />

                                    <span className="text-xl font-bold text-gray-600">California</span><br />
                                    255 Saengerhalle Road<br />
                                    New Braunfels, TX 78130<br />
                                    <br /></p>
                            </div>
                            <div className="flex bg-white py-10 border rounded-lg shadow-2xl flex-col  justify-center">
                                <div className="text-5xl mt-5 flex flex-row-reverse justify-around items-center">
                                    <img src={mexico} className="w-14" alt="" />
                                    <p className=" text-center text-2xl font-semibold text-blue-600">
                                        Mexico
                                    </p>
                                </div>
                                <div className="divider mx-9"></div>
                                <p className="mt-6 text-left pl-[15%] text-[#a3a3a6]">
                                    <span className="text-xl font-bold text-gray-600">Yokohama</span> <br /> <br />
                                    Minato-Mirai-Center building 13F, <br />
                                    3-6-1, Minato-Mirai, Nishi-ku,
                                    <br /> <br />
                                    Email:
                                    sales@zoho.jp,<br />
                                    Website:
                                    zoho.com/jp<br />
                                    <br /></p>
                            </div>
                            <div className="flex bg-white py-10 border rounded-lg shadow-2xl flex-col  justify-center">
                                <div className="text-5xl mt-5 flex flex-row-reverse justify-around items-center">
                                    <img src={singapore} className="w-14" alt="" />
                                    <p className=" text-center text-2xl font-semibold text-blue-600">
                                        Singapore
                                    </p>
                                </div>
                                <div className="divider mx-9"></div>
                                <p className="mt-6 text-left pl-[15%] text-[#a3a3a6]">
                                    <span className="text-xl font-bold text-gray-600">Singapore</span> <br /> <br />
                                    3F, KPHZ International Technology <br />
                                    Pleasanton, CA 94588,<br />
                                    <br />
                                    Transfer Center,<br />
                                    No.28, Houtun Road,<br />
                                    Beijing, China 100192<br />
                                    <br />
                                    Phone:
                                    +8610 82738868<br />
                                    Email:
                                    cn-sales@zohocorp.com<br />
                                    Website:
                                    zoho.com.cn<br /></p>
                            </div>
                        </div>
                        <div>
                            <div className="flex bg-white py-10 border rounded-lg shadow-2xl flex-col  justify-center">
                                <div className="text-5xl mt-5 flex flex-row-reverse justify-around items-center">
                                    <img src={india} className="w-14" alt="" />
                                    <p className=" text-center text-2xl font-semibold text-blue-600">
                                        India
                                    </p>
                                </div>
                                <div className="divider mx-9"></div>
                                <p className="mt-6 text-left pl-[15%] text-[#a3a3a6]">
                                    <span className="text-xl font-bold text-gray-600">Chennai</span> <br /> <br />
                                    Estancia IT Park, <br />
                                    Plot no. 140, 151, GST Road,<br />
                                    Vallancheri,
                                    <br /> <br />
                                    Phone:
                                    044 - 69656070
                                    044 - 69656060 <br />
                                    Fax:
                                    044 67447172<br /> <br />

                                    <span className="text-xl font-bold text-gray-600">Mumbai</span><br /> <br />
                                    The Capital, Unit# 808,<br />
                                    8th Floor, Plot No: C-70,<br />
                                    Bandra Kurla Complex,
                                    <br /> <br />
                                    Mumbai 400051 <br /><br />
                                    <span className="text-xl font-bold text-gray-600">Delhi</span><br /> <br />
                                    The Capital, Unit# 808,<br />
                                    8th Floor, Plot No: C-70,<br />
                                    Bandra Kurla Complex,
                                    <br /> <br />
                                    Mumbai 400051 <br /><br />
                                    <span className="text-xl font-bold text-gray-600">Punjab</span><br /> <br />
                                    The Capital, Unit# 808,<br />
                                    8th Floor, Plot No: C-70,<br />
                                    Bandra Kurla Complex,
                                    <br /> <br />
                                    Mumbai 400051 <br /><br />
                                    <span className="text-xl font-bold text-gray-600">Hyderabad</span><br /> <br />
                                    The Capital, Unit# 808,<br />
                                    8th Floor, Plot No: C-70,<br />
                                    Bandra Kurla Complex,
                                    <br /> <br />
                                    Mumbai 400051 <br /><br /></p>
                            </div>
                        </div>
                        <div className="space-y-10">
                            <div className="flex bg-white py-10 border rounded-lg shadow-2xl flex-col  justify-center">
                                <div className="text-5xl mt-5 flex flex-row-reverse justify-around items-center">
                                    <img src={japan} className="w-14" alt="" />
                                    <p className=" text-center text-2xl font-semibold text-blue-600">
                                        Japan
                                    </p>
                                </div>
                                <div className="divider mx-9"></div>
                                <p className="mt-6 text-left pl-[15%] text-[#a3a3a6]">
                                    <span className="text-xl font-bold text-gray-600">Yokohama</span> <br /> <br />
                                    Minato-Mirai-Center building 13F, <br />
                                    3-6-1, Minato-Mirai, Nishi-ku,
                                    <br /> <br />
                                    Email:
                                    sales@zoho.jp,<br />
                                    Website:
                                    zoho.com/jp<br />
                                    <br /></p>
                            </div>
                            <div className="flex bg-white py-10 border rounded-lg shadow-2xl flex-col  justify-center">
                                <div className="text-5xl mt-5 flex flex-row-reverse justify-around items-center">
                                    <img src={china} className="w-14" alt="" />
                                    <p className=" text-center text-2xl font-semibold text-blue-600">
                                        China
                                    </p>
                                </div>
                                <div className="divider mx-9"></div>
                                <p className="mt-6 text-left pl-[15%] text-[#a3a3a6]">
                                    <span className="text-xl font-bold text-gray-600">Beijing</span> <br /> <br />
                                    3F, KPHZ International Technology <br />
                                    Pleasanton, CA 94588,<br />
                                    <br />
                                    Transfer Center,<br />
                                    No.28, Houtun Road,<br />
                                    Beijing, China 100192<br />
                                    <br />
                                    Phone:
                                    +8610 82738868<br />
                                    Email:
                                    cn-sales@zohocorp.com<br />
                                    Website:
                                    zoho.com.cn<br /></p>
                            </div>
                            <div className="flex bg-white py-10 border rounded-lg shadow-2xl flex-col  justify-center">
                                <div className="text-5xl mt-5 flex flex-row-reverse justify-around items-center">
                                    <img src={brazil} className="w-14" alt="" />
                                    <p className=" text-center text-2xl font-semibold text-blue-600">
                                        Brazil
                                    </p>
                                </div>
                                <div className="divider mx-9"></div>
                                <p className="mt-6 text-left pl-[15%] text-[#a3a3a6]">
                                    <span className="text-xl font-bold text-gray-600">State of Santa Catarina</span> <br /> <br />
                                    Rod. José Carlos Daux, <br />
                                    4150 - Room 1 & 2 - Saco Grande,<br />
                                    Florianópolis - State of Santa Catarina, <br />
                                    88032-005 <br /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Trusted></Trusted>
            </div>

        </div>
    );
};

export default Contact;