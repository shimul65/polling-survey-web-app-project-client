import Banner from "./Banner";
import Faq from "./FAQ";
import HowWorks from "./HowWorks";
import MostVotedSurvey from "./MostVotedSurvey";
import Testimonial from "./Testimonial";
import Trusted from "./Trusted";

const Home = () => {
    return (
        <div className="min-h-screen">
            <Banner></Banner>
            <HowWorks></HowWorks>
            <MostVotedSurvey></MostVotedSurvey>
            <div className="overflow-hidden">
                <Testimonial></Testimonial>
            </div>
            <Faq></Faq>
            <div className="overflow-hidden">
                <Trusted></Trusted>
            </div>
        </div>
    );
};

export default Home;