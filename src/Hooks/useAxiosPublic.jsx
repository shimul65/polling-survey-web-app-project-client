import axios from "axios";

export const axiosPublic = axios.create({
    baseURL: 'https://survey-app-assignment-shimul.web.app',
})

const useAxiosPublic = () => {

    return axiosPublic;
};

export default useAxiosPublic;