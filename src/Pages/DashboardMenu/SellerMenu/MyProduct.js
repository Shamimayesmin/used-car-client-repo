import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";

const MyProduct = () => {
	const {
		data: addproducts,
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ["myproducts"],
		queryFn: async () => {
			try {
				const res = await fetch(
					" https://used-car-server.vercel.app/products",
					{
						headers: {
							authorization: `bearer ${localStorage.getItem("usedcarToken")}`,
						},
					}
				);

				const data = await res.json();
				return data;
			} catch (error) {}
		},
	});
	return (
		<div>
			<h2 className="text-2xl text-center m-3 text-red-600">
				{" "}
				My products: {addproducts?.length}
			</h2>
			<div className="overflow-x-auto">
				<table className="table w-full">
					<thead>
						<tr>
							<th></th>
							<th>Avatar</th>
							<th>Name</th>
							<th>Date</th>
							<th>price</th>
							<th>Status</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
						{addproducts?.map((product, i) => (
							<tr key={product._id}>
								<th>{i + 1}</th>
								<td className="m-0">
									<div className="avatar">
										<div className="w-24 rounded-full">
											<img src={product.image} alt="" />
										</div>
									</div>
								</td>
								<td>{product.name}</td>
								<td>{product.date}</td>
								<td>{product.price}</td>
								<td>
									{product.name && !product.sold && (
										<Link to={`/advertise/${product._id}`}>
											<button className="rounded-lg btn-sm btn-primary">
												Available
											</button>
										</Link>
									)}
									{product.name && product.sold && (
										<button className=" text-green-400 btn-sm">sold</button>
									)}
								</td>

								<td>
									<label
										// onClick={() => setDeleteDoctor(doctor)}
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
			{/* {deleteDoctor && (
				<ConfirmationModal
					title={`Are you sure you want to delete?`}
					message={`If you delete ${deleteDoctor.name}. You wont get treatment`}
					closeModal={closeModal}
					handleDeleteDoctor={handleDeleteDoctor}
					modalData={deleteDoctor}
					deleteBtnName="Delete"
				></ConfirmationModal>
			)} */}
		</div>
	);
};

export default MyProduct;
