import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const PaymentCheckForm = ({ booking }) => {
	const [cardError, setCardError] = useState();
	const [success, setSuccess] = useState();
	const [processing, setProcessing] = useState(false);
	const [transactionId, setTransactionId] = useState();
	const [clientSecret, setClientSecret] = useState("");

	const stripe = useStripe();
	const elements = useElements();

	const { price, email, person, _id } = booking;

	useEffect(() => {
		// Create PaymentIntent as soon as the page loads
		fetch(" https://used-car-server.vercel.app/create-payment-intent", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				authorization: `bearer ${localStorage.getItem("usedcarToken")}`,
			},
			body: JSON.stringify({ price }),
		})
			.then((res) => res.json())
			.then((data) => setClientSecret(data.clientSecret));
	}, [price]);

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		const card = elements.getElement(CardElement);
		if (card == null) {
			return;
		}

		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: "card",
			card,
		});

		if (error) {
			console.log(error);
			setCardError(error.message);
		} else {
			// console.log('[PaymentMethod]', paymentMethod);
			setCardError("");
		}

		setSuccess("");
		setProcessing(true);

		const { paymentIntent, error: confirmError } =
			await stripe.confirmCardPayment(clientSecret, {
				payment_method: {
					card: card,
					billing_details: {
						name: person,
						email: email,
					},
				},
			});

		if (confirmError) {
			setCardError(confirmError.message);
			return;
		}
		if (paymentIntent.status === "succeeded") {
			console.log("card info", card);
			setSuccess("Congrats ! your payment complete");
			setTransactionId(paymentIntent.id);

			// store payment info in the database
			const payment = {
				price,
				transactionId: paymentIntent.id,
				email,
				bookingId: _id,
			};

			fetch(" https://used-car-server.vercel.app/payments", {
				method: "POST",
				headers: {
					"content-type": "application/json",
					authorization: `bearer ${localStorage.getItem("usedcarToken")}`,
				},
				body: JSON.stringify(payment),
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					if (data.insertId) {
						setSuccess("Congrats ! your payment complete");
						setTransactionId(paymentIntent.id);
					}
				});
		}
		console.log("payment intern", paymentIntent);

		setProcessing(false);
	};
	return (
		<>
			<form onSubmit={handleSubmit}>
				<CardElement
					options={{
						style: {
							base: {
								fontSize: "16px",
								color: "#424770",
								"::placeholder": {
									color: "#aab7c4",
								},
							},
							invalid: {
								color: "#9e2146",
							},
						},
					}}
				/>
				<button
					className="btn btn-sm btn-primary mt-4"
					type="submit"
					disabled={!stripe || !clientSecret || processing}
				>
					Pay
				</button>
			</form>
			<p className="text-red-500">{cardError}</p>

			{success && (
				<div>
					<p className="text-lime-600">{success}</p>
					<p>
						Your transactionId :{" "}
						<span className="font-bold">{transactionId}</span>
					</p>
				</div>
			)}
		</>
	);
};

export default PaymentCheckForm;
