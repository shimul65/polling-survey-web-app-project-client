import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import moment from "moment/moment";
import useScrollToTop from "../../../Hooks/useScrollToTop";


const PaymentHistory = () => {
    useScrollToTop();
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments`)
            return res.data;
        },
    })

    return (
        <div>
            <div className="mt-16">
                <SectionTitle heading={'PRO USERS PAYMENTS'} ></SectionTitle>
            </div>
            <div className="uppercase flex justify-around font-semibold my-16">
                <h2 className="text-3xl lg:text-5xl" style={{
                    fontFamily: 'Inter'
                }}>Total Pro Users: {payments?.length}</h2>
            </div>
            <div className="overflow-x-auto mx-[5%] mb-16 lg::mb-0">
                <table className="table">
                    {/* head */}
                    <thead className="bg-gradient-to-b from-sky-300 to-blue-100 text-blue-700 font-semibold text-base md:text-xl">
                        <tr>
                            <th className="rounded-tl-2xl">
                            </th>
                            <th>NAME & EMAIL</th>
                            <th className="w-[10%]">EMAIL</th>
                            <th className="text-center">PAYMENT</th>
                            <th className="rounded-tr-2xl texce">DATE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments?.map((proUser, index) =>
                                <tr key={proUser._id}>
                                    <th className="text-center text-base md:text-2xl">
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="font-bold text-base md:text-lg">{proUser.name}</div>
                                        <div className="text-base md:text-lg font-semibold">{proUser.email}</div>
                                    </td>
                                    <th className="text-base md:text-lg">{proUser.transactionId
                                    }</th>
                                    <th className="text-center text-base md:text-2xl font-semibold">
                                        {proUser.payment}
                                    </th>
                                    <th className="text-base md:text-lg">
                                        {moment(proUser.date).format('LL')}
                                    </th>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;