import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';

const BookingModal = ({addProducts,setAddProducts}) => {
    const { title,location,resalePrice} = addProducts
    const {user} = useContext(AuthContext)
    console.log(user);

    const handleBooking = (event) => {
		event.preventDefault();

		const form = event.target;
		const name = form.name.value;
		const email = form.email.value;
		const phone = form.phone.value;

		console.log( name, email, phone);
		const booking = {
			
			productName: title,
			person: name,
			email,
			phone,
            location,
			price : resalePrice,
		};

		// TODO : send data to the server
		// and once data is saved then close the modal
		// and display toast

		fetch("http://localhost:5000/bookings", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(booking),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.acknowledged) {
					setAddProducts(null);
					toast.success("booking confirmed");
					// refetch();
				} else {
					toast.error(data.message);
				}
			});
		console.log(booking);
		// setTreatment(null)
	};

    return (
        <>
			<input type="checkbox" id="booking-modal" className="modal-toggle" />
			<div className="modal">
				<div className="modal-box relative w-96">
					<label
						htmlFor="booking-modal"
						className="btn btn-sm btn-circle absolute right-2 top-2"
					>
						✕
					</label>
					<h3 className="text-lg font-bold">{title}</h3>

					<form
						onSubmit={handleBooking}
						className="grid grid-cols-1 gap-3 mt-10"
					>
						<input
							type="text"
                            placeholder="product name"
							// value={date}
							className="input input-bordered w-full"
							// disabled
						/>
						<input
							type="text"
                            placeholder="price"
							// value={date}
							className="input input-bordered w-full"
							// disabled
						/>
						{/* <select name="slot" className="select select-bordered w-full">
							{slots.map((slot, i) => (
								<option value={slot} key={i}>
									{slot}
								</option>
							))}
						</select> */}
						<input
							name="name"
							type="text"
							placeholder="Your name"
							defaultValue={user?.displayName}
							disabled
							className="input input-bordered w-full"
						/>
						<input
							name="email"
							type="email"
							placeholder="Email address"
							// defaultValue={user?.email}
							// readOnly
							className="input input-bordered w-full"
						/>
						<input
							name="phone"
							type="number"
							placeholder="Phone number"
							className="input input-bordered w-full"
						/>
						<br />
						<input
							className="w-full btn btn-error"
							type="submit"
							value="submit"
						/>
					</form>
				</div>
			</div>
		</>
    );
};

export default BookingModal;