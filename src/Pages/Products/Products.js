import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../BookingModal/BookingModal";
import ProductCard from "./ProductCard";
import { format } from "date-fns";

const Products = () => {
	const allCategory = useLoaderData();
	// const all = data.products
	// const date = format(selectedDate, "PP");
	// console.Flog(allCategory);
	const [addProducts, setAddProducts] = useState(null);

	// const {
	// 	data: category = [],
	// 	refetch,
	// 	isLoading,
	// } = useQuery({
	// 	queryKey: ["appointmentOptions",],
	// 	queryFn: async () => {
	// 		const res = await fetch(
	// 			` https://used-car-server.vercel.app/brands`
	// 		);
	// 		const data = await res.json();
	// 		return data;
	// 	},
	// });

	return (
		<section>
			<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between sm:w-full">
				<div className="justify-center mx-auto rounded-lg">
					<h3 className="text-2xl font-mono p-4 text-white">
						Our All Category: {allCategory.length}
					</h3>

					<div className="grid sm:grid-cols-1 lg:grid-cols-3 p-3 gap-8">
						{allCategory &&
							allCategory?.map((item) => (
								<ProductCard
									key={item._id}
									item={item}
									setAddProducts={setAddProducts}
								></ProductCard>
							))}
					</div>
				</div>
			</div>
			{addProducts && (
				<BookingModal
					addProducts={addProducts}
					setAddProducts={setAddProducts}
				></BookingModal>
			)}
		</section>
	);
};

export default Products;
