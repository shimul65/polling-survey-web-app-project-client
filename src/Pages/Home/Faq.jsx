import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { Disclosure, Transition } from '@headlessui/react'
import { IoIosArrowUp } from "react-icons/io";


const Faq = () => {
    return (
        <div className="mb-16 mt-10">
           <div className="mb-16">
           <SectionTitle heading={'Frequently Asked Questions'}></SectionTitle>
           </div>
            <div className="container mx-auto">
                <div className="">
                    <div className="mx-auto w-[80%] gap-4 grid grid-cols-1 rounded-2xl ">
                        <Disclosure className="w-full">
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-3 text-left text-sm font-medium text-blue-800 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75" style={{ background: 'linear-gradient(360deg, #8cdcf9, #EBF4FF)' }}>
                                        <span className="text-xl md:text-2xl lg:text-3xl font-semibold">1. How do I create a new survey?</span>
                                        <IoIosArrowUp className={`${open ? 'rotate-180 transform text-xl md:text-2xl lg:text-3xl font-semibold' : ''
                                            }  text-blue-800 text-xl md:text-2xl lg:text-3xl font-semibold`}></IoIosArrowUp>
                                    </Disclosure.Button>
                                    <Transition
                                        show={open}
                                        enter="transition duration-500 ease-out"
                                        enterFrom="transform scale-95 opacity-0"
                                        enterTo="transform scale-100 opacity-100"
                                        leave="transition duration-400 ease-out"
                                        leaveFrom="transform scale-100 opacity-100"
                                        leaveTo="transform scale-95 opacity-0"
                                    >
                                        <Disclosure.Panel className="text-lg text-gray-500 ml-5">
                                            To create a new survey, log in to your account and navigate to the dashboard. Click on the &#34;Create Survey&#34; button, and you&#34;ll be guided through the process of adding questions, setting up logic, and customizing the survey to your needs.
                                        </Disclosure.Panel>
                                    </Transition>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure className="w-full">
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-3 text-left text-sm font-medium text-blue-800 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75" style={{ background: 'linear-gradient(360deg, #8cdcf9, #EBF4FF)' }}>
                                        <span className="text-xl md:text-2xl lg:text-3xl font-semibold">2. What question types are available?</span>
                                        <IoIosArrowUp className={`${open ? 'rotate-180 transform text-xl md:text-2xl lg:text-3xl font-semibold' : ''
                                            }  text-blue-800 text-xl md:text-2xl lg:text-3xl font-semibold`}></IoIosArrowUp>
                                    </Disclosure.Button>
                                    <Transition
                                        show={open}
                                        enter="transition duration-500 ease-out"
                                        enterFrom="transform scale-95 opacity-0"
                                        enterTo="transform scale-100 opacity-100"
                                        leave="transition duration-400 ease-out"
                                        leaveFrom="transform scale-100 opacity-100"
                                        leaveTo="transform scale-95 opacity-0"
                                    >
                                        <Disclosure.Panel className="text-lg text-gray-500 ml-5">
                                            We offer a diverse range of question types, including multiple-choice, open-ended, rating scales, and more. This variety allows you to design surveys that suit your specific data collection needs.
                                        </Disclosure.Panel>
                                    </Transition>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure className="w-full">
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-3 text-left text-sm font-medium text-blue-800 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75" style={{ background: 'linear-gradient(360deg, #8cdcf9, #EBF4FF)' }}>
                                        <span className="text-xl md:text-2xl lg:text-3xl font-semibold">3. Can I share surveys on social media?</span>
                                        <IoIosArrowUp className={`${open ? 'rotate-180 transform text-xl md:text-2xl lg:text-3xl font-semibold' : ''
                                            }  text-blue-800 text-xl md:text-2xl lg:text-3xl font-semibold`}></IoIosArrowUp>
                                    </Disclosure.Button>
                                    <Transition
                                        show={open}
                                        enter="transition duration-500 ease-out"
                                        enterFrom="transform scale-95 opacity-0"
                                        enterTo="transform scale-100 opacity-100"
                                        leave="transition duration-400 ease-out"
                                        leaveFrom="transform scale-100 opacity-100"
                                        leaveTo="transform scale-95 opacity-0"
                                    >
                                        <Disclosure.Panel className="text-lg text-gray-500 ml-5">
                                            Yes, our platform makes it easy to share surveys on various social media platforms. You can also distribute surveys via email campaigns, providing a seamless way to reach your audience.
                                        </Disclosure.Panel>
                                    </Transition>
                                </>
                            )}
                        </Disclosure>

                        <Disclosure className="w-full">
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-3 text-left text-sm font-medium text-blue-800 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75" style={{ background: 'linear-gradient(360deg, #8cdcf9, #EBF4FF)' }}>
                                        <span className="text-xl md:text-2xl lg:text-3xl font-semibold">5. Are there analytics to track survey responses?</span>
                                        <IoIosArrowUp className={`${open ? 'rotate-180 transform text-xl md:text-2xl lg:text-3xl font-semibold' : ''
                                            }  text-blue-800 text-xl md:text-2xl lg:text-3xl font-semibold`}></IoIosArrowUp>
                                    </Disclosure.Button>
                                    <Transition
                                        show={open}
                                        enter="transition duration-500 ease-out"
                                        enterFrom="transform scale-95 opacity-0"
                                        enterTo="transform scale-100 opacity-100"
                                        leave="transition duration-400 ease-out"
                                        leaveFrom="transform scale-100 opacity-100"
                                        leaveTo="transform scale-95 opacity-0"
                                    >
                                        <Disclosure.Panel className="text-lg text-gray-500 ml-5">
                                            Yes, our web app provides robust analytics tools. You can track responses in real-time, view graphical representations of data, and export reports for further analysis.
                                        </Disclosure.Panel>
                                    </Transition>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure className="w-full">
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-3 text-left text-sm font-medium text-blue-800 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75" style={{ background: 'linear-gradient(360deg, #8cdcf9, #EBF4FF)' }}>
                                        <span className="text-xl md:text-2xl lg:text-3xl font-semibold">4. Can I collaborate with others on survey creation?</span>
                                        <IoIosArrowUp className={`${open ? 'rotate-180 transform text-xl md:text-2xl lg:text-3xl font-semibold' : ''
                                            }  text-blue-800 text-xl md:text-2xl lg:text-3xl font-semibold`}></IoIosArrowUp>
                                    </Disclosure.Button>
                                    <Transition
                                        show={open}
                                        enter="transition duration-500 ease-out"
                                        enterFrom="transform scale-95 opacity-0"
                                        enterTo="transform scale-100 opacity-100"
                                        leave="transition duration-400 ease-out"
                                        leaveFrom="transform scale-100 opacity-100"
                                        leaveTo="transform scale-95 opacity-0"
                                    >
                                        <Disclosure.Panel className="text-lg text-gray-500 ml-5">
                                            Yes, our platform supports collaboration. You can invite team members to collaborate on survey creation, making it a collaborative and efficient process.
                                        </Disclosure.Panel>
                                    </Transition>
                                </>
                            )}
                        </Disclosure>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Faq;