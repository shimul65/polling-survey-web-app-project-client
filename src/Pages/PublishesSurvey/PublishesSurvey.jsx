import { Typewriter } from "react-simple-typewriter";
import AllSurvey from "../../Components/AllSurvey";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import usePublishedSurvey from "../../Hooks/usePublishedSurvey";
import banner2 from "../../assets/contact/banner2.jpg"
import useScrollToTop from "../../Hooks/useScrollToTop";
import { useState } from "react";


const PublishesSurvey = () => {
    useScrollToTop();
    const [surveys, refetch] = usePublishedSurvey();

    // const [newSurveys, setSurveys] = useState(surveys); // Your survey data
    const [searchText, setSearchText] = useState('');
    const [asc, setAsc] = useState(true);

    // Assuming your surveys have a 'title' property

    const filteredSurveys = surveys.filter((survey) =>
        survey.title.toLowerCase().includes(searchText.toLowerCase())
    );

    const handleSearch = (e) => {
        setSearchText(e.target.value);
    };

    const sortedSurveys = filteredSurveys.sort((a, b) => {
        const votesA = a.yesVote + a.noVote;
        const votesB = b.yesVote + b.noVote;

        // Toggle between sorting by most votes and lowest votes
        return asc ? votesB - votesA : votesA - votesB;
    });



    return (
        <div className="w-full relative">
            <div className=" border border-black-700 hero relative w-full md:h-[600px]"
                style={{ backgroundImage: `url(${banner2})`, backgroundSize: '100% 100%' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="mt-28 md:mt-24 lg:mt-0 mb-14 lg:mb-0">
                    <div className="flex flex-col items-center space-y-7 lg:mb-0">
                        <h2 className="text-3xl md:text-7xl font-extrabold text-center text-white"><span className='linear-style'>Shape Our Future</span>
                            <br />
                            <span className='md:text-6xl linear-style2'>Take the <Typewriter
                                cursor
                                cursorStyle='|'
                                cursorBlinking
                                delaySpeed={1000}
                                deleteSpeed={25}
                                loop={0}
                                typeSpeed={75}
                                words={[
                                    'SURVEY !',
                                ]}
                            /></span>
                        </h2>
                        <p className="text-2xl px-16 md:px-0 font-medium text-white text-center">Engage for Impactful Insights!</p>
                        <div className="btn-epic shadow-md shadow-sky-300 " style={{ height: '50px', }}>
                            <div>
                                <span>Explore More</span><span>Explore More</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="mb-8 pt-8">
                    <SectionTitle heading={'ALL THE SURVEY'}></SectionTitle>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center">
                    <form className="md:w-1/2 w-3/4" >
                        <input onChange={handleSearch} type="text" name="search" className="input input-bordered my-5 w-full " placeholder="search by title" />
                    </form>
                    <button
                        className="btn btn-info text-xl text-white ml-3"
                        onClick={() => setAsc(!asc)}
                    >
                        {asc ? 'FILTER BY LOWEST VOTE' : 'FILTER BY MOST VOTE'}
                    </button>
                </div>
                <div className="my-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-0 md:mx-4 lg:mx-2">
                        {
                            sortedSurveys?.map(survey => <AllSurvey key={survey._id} survey={survey} refetch={refetch}></AllSurvey>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );

};

export default PublishesSurvey;