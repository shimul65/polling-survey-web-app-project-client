import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth()

    //get users data from server using tanstackQuery
    const { data: allUsers = [], isPending, isError, error, refetch } = useQuery({

        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users`)
            return res.data;
        }
    })

    return [allUsers, isPending, isError, error, refetch]
};

export default useUsers;