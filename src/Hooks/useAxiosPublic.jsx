import axios from "axios";

export const axiosPublic = axios.create({
    baseURL: 'https://polling-survey-assignment-server.vercel.app',
})

const useAxiosPublic = () => {

    return axiosPublic;
};

export default useAxiosPublic;