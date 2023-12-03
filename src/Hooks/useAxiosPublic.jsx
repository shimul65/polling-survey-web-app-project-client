import axios from "axios";

export const axiosPublic = axios.create({
    baseURL: 'http://localhost:5066',
})

const useAxiosPublic = () => {

    return axiosPublic;
};

export default useAxiosPublic;