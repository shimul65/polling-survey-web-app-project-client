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
            <Testimonial></Testimonial>
            <Faq></Faq>
            <Trusted></Trusted>
        </div>
    );
};

export default Home;