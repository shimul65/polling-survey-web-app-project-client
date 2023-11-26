import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { Disclosure, Transition } from '@headlessui/react'
import { IoIosArrowUp } from "react-icons/io";


const Faq = () => {
    return (
        <div>
            <SectionTitle heading={'Frequently Asked Questions'}></SectionTitle>

            <div className="container mx-auto">
                <div className="">
                    <div className="mx-auto w-[80%] gap-4 grid grid-cols-1 rounded-2xl ">
                        <Disclosure className="w-full">
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-3 text-left text-sm font-medium text-blue-800 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75" style={{background: 'linear-gradient(360deg, #6DD7FF, #EBF4FF)'}}>
                                        <span className="text-3xl font-semibold">What is your refund policy?</span>
                                        <IoIosArrowUp className={`${open ? 'rotate-180 transform text-3xl font-semibold' : ''
                                            }  text-purple-500 text-3xl font-semibold`}></IoIosArrowUp>
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
                                            If you&#39;re unhappy with your purchase for any reason, email us
                                            within 90 days and we&#39;ll refund you in full, no questions asked.
                                        </Disclosure.Panel>
                                    </Transition>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure className="w-full">
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                        <span>What is your refund policy?</span>
                                        <IoIosArrowUp className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}></IoIosArrowUp>
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
                                        <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                                            If you&#39;re unhappy with your purchase for any reason, email us
                                            within 90 days and we&#39;ll refund you in full, no questions asked.
                                        </Disclosure.Panel>
                                    </Transition>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure className="w-full">
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                        <span>What is your refund policy?</span>
                                        <IoIosArrowUp className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}></IoIosArrowUp>
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
                                        <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                                            If you&#39;re unhappy with your purchase for any reason, email us
                                            within 90 days and we&#39;ll refund you in full, no questions asked.
                                        </Disclosure.Panel>
                                    </Transition>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure className="w-full">
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                        <span>What is your refund policy?</span>
                                        <IoIosArrowUp className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}></IoIosArrowUp>
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
                                        <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                                            If you&#39;re unhappy with your purchase for any reason, email us
                                            within 90 days and we&#39;ll refund you in full, no questions asked.
                                        </Disclosure.Panel>
                                    </Transition>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure className="w-full">
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                        <span>What is your refund policy?</span>
                                        <IoIosArrowUp className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}></IoIosArrowUp>
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
                                        <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                                            If you&#39;re unhappy with your purchase for any reason, email us
                                            within 90 days and we&#39;ll refund you in full, no questions asked.
                                        </Disclosure.Panel>
                                    </Transition>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure className="w-full">
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                        <span>What is your refund policy?</span>
                                        <IoIosArrowUp className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}></IoIosArrowUp>
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
                                        <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                                            If you&#39;re unhappy with your purchase for any reason, email us
                                            within 90 days and we&#39;ll refund you in full, no questions asked.
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