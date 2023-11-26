import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import './About.css'
import video3 from '../../assets/video/about-video.mp4'
import { Typewriter } from 'react-simple-typewriter'
import img1 from '../../assets/about/zohoaboutus-companykeep.jpg'
import img2 from '../../assets/about/zohoaboutus-privacy.jpg'
import img3 from '../../assets/about/million.png'
import img4 from '../../assets/about/million2.png'
import img5 from '../../assets/about/crm-watchlist-banner.webp'
import Testimonial from "../Home/Testimonial";


const About = () => {
    return (
        <>
            <div className="relative hero text-white">
                <div className="hero-overlay bg-opacity-80"></div>
                <video
                    id="backgroundVideo"
                    className="border"
                    controls autoPlay preload='auto' loop muted
                >
                    <source src={video3} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="">
                    <div className="flex flex-col items-center space-y-7 lg:mb-20">
                        <h2 className="text-3xl md:text-7xl font-extrabold text-center text-white"><span className='linear-style'>Crafting the Survey</span>
                            <br />
                            <span className='md:text-6xl linear-style2'>Experience with Expertise.</span>
                        </h2>
                        <p className="text-sm px-16 md:px-0 md:text-xl font-medium text-white text-center">For more than 25 years, we&rsquo;ve been bucking Silicon Valley <br />trends, taking our own approach to building products.</p>
                        <div className="btn-epic shadow-md shadow-sky-300 " style={{ height: '50px', }}>
                            <div>
                                <span>Explore More</span><span>Explore More</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto mb-16">
                <SectionTitle heading={"ABOUT US"} ></SectionTitle>
                <div>
                    <p className="text-4xl font-semibold text-justify mx-[14%]">Good software is a work of art, and good art takes time. Our teams spend years mastering their craft in order to deliver exceptional products that customers love. Software isn&#39;t just our paycheck:</p>
                </div>
                <div className="my-16">
                    <h2 className="mt-5 ml-[33%] text-4xl md:text-7xl font-bold">
                        It&rsquo;s Our <span className=" text-4xl md:text-8xl text-[#05bcff] text-center">
                            <Typewriter
                                cursor
                                cursorStyle='!'
                                cursorBlinking
                                delaySpeed={1000}
                                deleteSpeed={25}
                                loop={0}
                                typeSpeed={75}
                                words={[
                                    'Cruft ',
                                    'Passion '
                                ]}
                            />
                        </span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4  gap-5 px-2">
                    {/* left side */}
                    <div className="col-span-3 space-y-6">
                        <div className='border px-5 py-6 rounded-lg'>
                            <h2 className='text-3xl font-bold md:w-3/4 mb-5'>A company you will keep</h2>
                            <div className="">
                                <img className=' w-full h-[600px] object-cover rounded-lg' src={img1} alt="" />
                                <p className='mt-6 text-justify text-lg'>Software should solve more problems than it causes, so we don&rsquo;t lock you into multi-year contracts with fixed price increases. We don&rsquo;t push our salespeople to push you.

                                    Our products are available à la carte or as suites, and we offer flexible payment options to fit every budget. Our prices are as transparent as our privacy policy, and we take pride in both.
                                </p>
                                <button className="btn btn-outline btn-info mt-4 text-lg ">Read More</button>
                            </div>
                        </div>
                        <div className='border px-5 py-6 rounded-lg'>
                            <h2 className='text-3xl font-bold md:w-3/4 mb-5'>A private company with a public vision</h2>
                            <div className="">
                                <img className=' w-full h-[600px] object-cover rounded-lg' src={img2} alt="" />
                                <p className='mt-6 text-justify text-lg'>Since we have never taken money from investors, we have always been able to focus on what is best for the customer. Rather than worrying about short-term profits, we&rsquo;ve had the freedom to think for the long term.
                                    This kind of independence changes how we approach problem-solving, empowering us to truly think differently.
                                    From how we build to how we hire, our unconventional approach has brought us to more than 15,000 employees and 100 million users around the world.
                                </p>
                                <button className="btn btn-outline btn-info mt-4 text-lg ">Read More</button>
                            </div>
                        </div>
                    </div>

                    {/* right side */}
                    <div className="flex flex-col gap-5">
                        <div className='border px-5 py-3 rounded-lg bg-[#fff7f0]'>
                            <img className='w-full' src={img4} alt="" />
                            <h2 className='text-xl font-bold my-5 mb-5'>Celebrating 1 million installations of Marketplace extensions. With a thriving ecosystem of 500+ partners who&#39;ve worked alongside us, we enabled 800,000+ users to do more with Zoho.</h2>
                            <p></p>
                        </div>
                        <div className='border px-5 py-3 rounded-lg bg-[#fff7f0]'>
                            <img className='w-full' src={img3} alt="" />
                            <h2 className='text-xl font-bold my-5 mb-5'>
                                Marking the milestone of reaching 100 million+ users! Your trust in us made this possible, and we couldn&#39;t be more grateful. We believe this is the beginning of a new forever. Thank you for being a part of our journey.

                            </h2>
                            <p></p>
                        </div>
                        <div className='border px-5 py-3 rounded-lg bg-[#fff7f0]'>
                            <img className='w-full' src={img5} alt="" />
                            <h2 className='text-xl font-bold my-5 mb-5'>CRM Watch list</h2>
                            <p className="font-semibold">Zoho CRM wins the CRM Watch list Award with distinction and the highest overall score among strong competitors like Salesforce, Oracle, SAP, and more.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <Testimonial></Testimonial>
                </div>
            </div>
        </>
    );
};

export default About;