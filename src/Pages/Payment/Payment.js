import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {

    const booking = useLoaderData();
    // const navigation = useNavigation()
    
	console.log("booking is", booking);
	const { treatment, price, appointmentDate, slot } = booking;


    // if(navigation.state === 'loading'){
    //     return <Loading></Loading>
    // }

    return (
        <div>
			<h2 className="text-3xl">Payment for {treatment}</h2>
			<p className="text-xl">
				Please pay <strong>${price}</strong> for your appointment on{slot}
			</p>
			{/* <div className="w-96 my-14">
				<Elements stripe={stripePromise}>
					<CheckoutForm booking={booking}/>
				</Elements>
			</div> */}
		</div>
    );
};

export default Payment;