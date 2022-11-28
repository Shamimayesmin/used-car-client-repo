import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { getAllBookingsByEmail } from "../../../api/booking";
import { AuthContext } from "../../../context/AuthProvider";

const MyOrder = () => {
	const { user } = useContext(AuthContext);
	const [allBookings, setAllBookings] = useState([])
	//   console.log(bookings)
	const url = `http://localhost:5000/bookings?email=${user?.email}`;

	const { data: bookings = [], refetch } = useQuery({
		queryKey: ["bookings", user?.email],
		queryFn: async () => {
			const res = await fetch(url, {
				headers: {
					authorization: `bearer ${localStorage.getItem("usedcarToken")}`,
				},
			});
			const data = await res.json();
			return data;
		},
	});


	const handleDeleteOrder = (id) => {
		fetch(
			`http://localhost:5000/bookings/${id}`,
			{
				method: "DELETE",
				headers: {
					authorization: `bearer ${localStorage.getItem("usedcarToken")}`,
				},
			}
		)
			.then((res) => res.json())
			.then((data) => {
				if (data.deletedCount > 0) {
					refetch();
					toast.success(`Buyer deleted successfully`);
                    const reamaining =allBookings.filter((odr) => odr._id !== id);
                    setAllBookings(reamaining);
				}
				console.log(data);
			});
	};




	return (
		<div>
			<h2 className="text-2xl mb-4 text-center text-red-600">My Order</h2>
			<div className="overflow-x-auto">
				<table className="table w-full">
					<thead>
						<tr>
							<th></th>
							<th>Name</th>
							<th>productName</th>
							<th>location</th>
							<th>price</th>
							<th>Payment</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
						{bookings &&
							bookings?.map((booking, i) => (
								<tr key={booking._id} className="hover">
									<th>{i + 1}</th>
									<td>{booking.person}</td>
									<td>{booking.productName}</td>
									<td>{booking.location}</td>
									
									<td>{booking.price}</td>
									
									
									<td>
										{booking.price && !booking.paid && (
											<Link to={`/dashboard/payment/${booking._id}`}>
												<button className="btn btn-primary btn-sm">pay</button>
											</Link>
										)}
										{booking.price && booking.paid && (
											<button className=" text-green-400 btn-sm">paid</button>
										)}

										
									</td>

									<td>
										<label
										onClick={()=>handleDeleteOrder(booking._id)}
										htmlFor="confirm-modal"
										className="btn btn-sm btn-error"
									>
										Delete
										</label>
										</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MyOrder;
