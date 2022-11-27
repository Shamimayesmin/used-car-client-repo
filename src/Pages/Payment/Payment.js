import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../components/Spinner/Loading';
import PaymentCheckForm from './PaymentCheckForm';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {

    const booking = useLoaderData();
    const navigation = useNavigation()
    
	console.log("booking is", booking);
	const { productName, price} = booking;


    if(navigation.state === 'loading'){
        return <Loading></Loading>
    }

    return (
        <div className='mt-7'>
			<h2 className="text-2xl text-center">Payment for {productName}</h2>
			<p className="text-center">
				Please pay <strong>${price}</strong> for purchase this item
			</p>
			<div className="w-96 my-14 mx-auto justify-center">
				<Elements stripe={stripePromise}>
					<PaymentCheckForm booking={booking}/>
				</Elements>
			</div>
		</div>
    );
};

export default Payment;