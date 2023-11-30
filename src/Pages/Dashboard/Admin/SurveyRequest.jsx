import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import MySurvey from "../../../Components/MySurvey/MySurvey";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const SurveyRequest = () => {

    const axiosSecure = useAxiosSecure();
    const { data: mySurveys, refetch } = useQuery({
        queryKey: ['surveys'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/surveys`);
            return res.data;
        }
    })

    return (
        <div className="mb-16">
            <div className="mt-16">
                <SectionTitle heading={`SURVEYOR's SURVEY REQUEST`} ></SectionTitle>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mx-0 mt-16 md:mx-4 lg:mx-2'>
                {
                    mySurveys?.map(survey => <MySurvey key={survey._id} survey={survey} refetch={refetch}></MySurvey>)
                }
            </div>
        </div>
    );
};

export default SurveyRequest;