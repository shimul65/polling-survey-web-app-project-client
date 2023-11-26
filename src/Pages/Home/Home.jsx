import Banner from "./Banner";
import Faq from "./FAQ";
import HowWorks from "./HowWorks";
import Testimonial from "./Testimonial";
import Trusted from "./Trusted";

const Home = () => {
    return (
        <div className="min-h-screen">
            <Banner></Banner>
            <HowWorks></HowWorks>
            <Testimonial></Testimonial>
            <Faq></Faq>
            <Trusted></Trusted>
        </div>
    );
};

export default Home;