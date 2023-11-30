import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const usePublishedSurvey = () => {

    const axiosPublic = useAxiosPublic();

    const { data: surveys = [], refetch, isPending, isError, error, } = useQuery({

        queryKey: ['publishedSurveys'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/publishedSurveys`)
            return res.data;
        }
    })

    return [surveys, isPending, isError, error, refetch]
};

export default usePublishedSurvey;