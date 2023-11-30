import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import MySurvey from "../../../Components/MySurvey/MySurvey";
import useScrollToTop from "../../../Hooks/useScrollToTop";


const SurveyorHome = () => {
    useScrollToTop();
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: mySurveys, refetch } = useQuery({
        queryKey: [user?.email, 'surveys'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/surveys?email=${user.email}`);
            return res.data;
        }
    })

    return (
        <div className="mb-16">
            <div className="mt-16">
                <SectionTitle heading={'ALL OF YOUR SURVEYS'} ></SectionTitle>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mx-0 mt-16 md:mx-4 lg:mx-2'>
                {
                    mySurveys?.map(survey => <MySurvey key={survey._id} survey={survey} refetch={refetch}></MySurvey>)
                }
            </div>
        </div>
    );
};

export default SurveyorHome;