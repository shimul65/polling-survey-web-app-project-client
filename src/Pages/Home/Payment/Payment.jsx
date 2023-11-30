import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import useScrollToTop from "../../../Hooks/useScrollToTop";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)

const Payment = () => {
    useScrollToTop();
    return (
        <div className="pt-[20%] lg:pt-[7%]">
            <SectionTitle heading={"Pay for Become Pro User"} ></SectionTitle>
            <div className="text-center my-10">
                <h2 className="text-4xl font-bold text-red-700">$ 100</h2>
            </div>
            <div className="container mx-auto w-1/2">
                <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;