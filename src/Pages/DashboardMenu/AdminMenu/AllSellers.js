import React, { useEffect, useState } from "react";

import toast from "react-hot-toast";
import Seller from "./Seller";

const AllSellers = () => {
	const [allSeller, setAllSeller] = useState([]);
	//  get all sellers
	useEffect(() => {
		fetch(" https://used-car-server.vercel.app/users/seller")
			.then((res) => res.json())
			// .then(data => console.log(data))
			.then((data) => setAllSeller(data));
	}, []);

	// console.log(allSeller);
	// delete specific seller
	const handleDeleteSeller = (id) => {
		fetch(` https://used-car-server.vercel.app/users/${id}`, {
			method: "DELETE",
			headers: {
				authorization: `bearer ${localStorage.getItem("usedcarToken")}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.deletedCount > 0) {
					
					toast.success(`Seller deleted successfully`);
					const reamaining = allSeller.filter((odr) => odr._id !== id);

					setAllSeller(reamaining);
				}

				console.log(data);
			});
	};

	//  verify seller
	const handleMakeVerify = (id) => {
		fetch(`  https://used-car-server.vercel.app/users/seller/${id}`, {
			method: "PUT",
			headers: {
				authorization: `bearer ${localStorage.getItem("usedcarToken")}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.modifiedCount > 0) {
					toast.success("verify successfull");
					// const reamaining = allSeller.filter((veri) => veri._id !== id);
					// setAllSeller();
				}
			});
	};

	return (
		<div>
			<h2 className="text-3xl text-center m-7 font-semibold text-red-500">
				All Sellers
			</h2>

			<div className="overflow-x-auto">
				<table className="table w-full">
					<thead>
						<tr>
							<th></th>
							<th>Name</th>
							<th>Email</th>
							<th>Role</th>
							<th>Status</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
						{allSeller?.map((sale, i) => (
							<Seller
								i={i}
								key={sale._id}
								sale={sale}
								handleDeleteSeller={handleDeleteSeller}
								handleMakeVerify={handleMakeVerify}
							></Seller>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default AllSellers;
