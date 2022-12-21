import { useQuery } from "@tanstack/react-query";
import React from "react";

import AddvertiseCard from "./AddvertiseCard";

const Advertise = () => {
	//get the advertised product
	const { data: addvertiseProduct } = useQuery({
		queryKey: ["brands"],
		queryFn: async () => {
			const res = await fetch("http://localhost:5000/brands");
			const data = res.json();
			return data;
		},
	});

	// console.log(addvertises);
	//don't show addvertise section if there is no  product
	if (addvertiseProduct?.length === 0) {
		return <div></div>;
	}
	return (
		<section>
			<div className="justify-center mx-auto rounded-lg my-20">
				<h3 className="text-center text-2xl text-red-600 font-bold m-10">
					Advertised Products
				</h3>

				<div className="grid sm:grid-cols-1 lg:grid-cols-3 p-3 gap-8">
					{addvertiseProduct &&
						addvertiseProduct
							?.slice(-3)
							.reverse()
							.map((item) => (
								<AddvertiseCard
									key={item._id}
									item={item}

									// setAddProducts={setAddProducts}
								></AddvertiseCard>
							))}
				</div>
			</div>
		</section>
	);
};

export default Advertise;
