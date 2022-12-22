import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Loading from "../../../components/Spinner/Loading";

const MyProduct = () => {
	const [allproduct, setAllProduct] = useState([]);
	const {
		data: addproducts,
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ["myproducts"],
		queryFn: async () => {
			try {
				const res = await fetch(
					"https://used-car-server.vercel.app/products",
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

	const handleDeleteProduct = (id) => {
		fetch(`https://used-car-server.vercel.app/products/${id}`, {
			method: "DELETE",
			headers: {
				authorization: `bearer ${localStorage.getItem("usedcarToken")}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.deletedCount > 0) {
					refetch();
					toast.success(`Buyer deleted successfully`);
					const reamaining = allproduct.filter((odr) => odr._id !== id);
					setAllProduct(reamaining);
				}
				console.log(data);
			});
	};

	//advertise the product of the seller
	const handleAdvertise = (id) => {
		fetch(`https://used-car-server.vercel.app/products/${id}`, {
			method: "PUT",
			headers: {
				authorization: `bearer ${localStorage.getItem("usedcarToken")}`,
			},
		})
			.then((res) => res.json())
			// .then(res => {
			//     if (res.status === 401 || res.status === 403) {
			//         return logOut();
			//     }
			//     return res.json()
			// })
			.then((data) => {
				console.log(data);
				if (data.modifiedCount > 0) {
					refetch();
					toast.success(`Addvertise deleted successfully`);
				}
			});
	};

	if (isLoading) {
		return <Loading></Loading>;
	}
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
							<th>Price</th>
							<th>Status</th>
							<th>Add</th>

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

								<td>{product.price}</td>

								<td>
									{product.name && !product.advertise && (
										<Link to={`/advertise/${product._id}`}>
											<button className="rounded-lg btn-sm bg-orange-100">
												Available
											</button>
										</Link>
									)}
									{product.name && product.advertise && (
										<button className=" text-green-400 btn-sm">Sold</button>
									)}
								</td>

								<td>
									<label
										onClick={() => handleAdvertise(product._id)}
										disabled={product.advertise === "true"}
										htmlFor="confirm-modal"
										className="btn btn-sm btn-accent"
									>
										Advertise
									</label>
								</td>
								<td>
									<label
										onClick={() => handleDeleteProduct(product._id)}
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

export default MyProduct;
