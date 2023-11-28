import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)

const Payment = () => {


    return (
        <div className="pt-[7%]">
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