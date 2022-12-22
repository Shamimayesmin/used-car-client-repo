import React, { useEffect, useState } from "react";
import { useActionData } from "react-router-dom";
import CategoryCard from "./CategoryCard";

const Category = () => {
	// const data = useActionData()
	// console.log(data);
	const [categories, setCategory] = useState([]);

	useEffect(() => {
		fetch(" https://used-car-server.vercel.app/category")
			.then((res) => res.json())
			// .then(data => console.log(data))
			.then((data) => setCategory(data));
	}, []);
	return (
		<section className="container mx-auto">
			<h2 className="text-center font-serif text-2xl text-red-600 font-bold">
					All Categories
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3 mt-10 mb-20">
					{categories?.map((category) => (
						<CategoryCard key={category._id} category={category}></CategoryCard>
					))}
				</div>
		</section>
	);
};

export default Category;
