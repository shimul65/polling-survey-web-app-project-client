import { Link } from "react-router-dom";
import AllSurvey from "../../Components/AllSurvey";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import usePublishedSurvey from "../../Hooks/usePublishedSurvey";


const MostVotedSurvey = () => {

    const [surveys, refetch] = usePublishedSurvey();

    const sortedSurveys = surveys.map((survey) => ({
        ...survey,
        totalVotes: survey.yesVote + survey.noVote,
    }));

    sortedSurveys.sort((a, b) => b.totalVotes - a.totalVotes);

    return (
        <div className="container mx-auto my-16">
            <div className="mb-8 pt-8">
                <SectionTitle heading={'MOST VOTED SURVEY'}></SectionTitle>
            </div>
            <div className="my-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-0 md:mx-4 lg:mx-2">
                    {
                        sortedSurveys?.slice(0, 6).map(survey => <AllSurvey key={survey._id} survey={survey} refetch={refetch}></AllSurvey>)
                    }
                </div>
            </div>
            <Link to='/surveys'>
                <div className="btn-epic mx-auto shadow-md shadow-sky-300 " style={{ height: '50px', width: '25%' }}>
                    <div>
                        <span>View More</span><span>View More</span>
                    </div>
                </div></Link>
        </div>
    );
};

export default MostVotedSurvey;