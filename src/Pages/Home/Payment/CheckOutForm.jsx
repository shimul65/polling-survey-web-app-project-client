import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useScrollToTop from "../../../Hooks/useScrollToTop";

const CheckOutForm = () => {
    useScrollToTop();
    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState('');
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const navigate = useNavigate();

    const totalPrice = 100

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then((res) => {
                    // console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                });
        }
    }, [axiosSecure, totalPrice]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('')
        }


        // confirm the payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous',
                }
            }
        })

        if (confirmError) {
            // console.log('[error in confirm payment]', confirmError);
        } else {
            console.log('[PaymentIntent]', paymentIntent);
            if (paymentIntent.status === 'succeeded') {

                setTransactionId(paymentIntent.id);
                const payment = {
                    name: user.displayName,
                    email: user.email,
                    payment: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(),
                }
                const res = await axiosSecure.post('/payments', payment)
                // console.log('payment saved', res.data);

                if (res.data?.insertedId) {
                    const updateStatus = { role: 'Pro User' }
                    const res = await axiosSecure.patch(`/users/${user.email}`, updateStatus)
                    console.log(res.data)
                    if (res.data.modifiedCount > 0) {
                        navigate('/')
                        Swal.fire(
                            'Payment Successful!',
                            `You're a Pro User now.`,
                            'success'
                        )
                    }
                }
            }
        }

    }

    return (
        <form onSubmit={handleSubmit} className="mx-[5%] mb-16">
            {
                <CardElement className="border py-5 px-2" options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: 'skyBlue',
                            '::placeholder': {
                                color: 'skyBlue',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}>
                </CardElement>}
            <p className="text-red-500 my-5 text-left text-base">{error}</p>
            {transactionId && <p className="text-green-600 font-semibold"> Your transaction id: <span className="text-red-600 font-bold ml-3">{transactionId}</span></p>}
            {
                !stripe || !clientSecret ? <button className="btn flex mx-auto mt-5 w-40 text-lg" disabled='disabled'>PAY</button>
                    :
                    <div className="form-control mt-6">
                        <button type="submit">
                            <div className="btn-epic mx-auto shadow-md shadow-sky-300 " style={{ height: '50px', width: '60%' }}>
                                <div>
                                    <span style={{ left: '0' }}>PAY</span><span style={{ left: '0' }}>PAY</span>
                                </div>
                            </div>
                        </button>
                    </div>
            }
        </form>
    );
};

export default CheckOutForm;