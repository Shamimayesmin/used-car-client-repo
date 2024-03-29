import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({category}) => {
    const {brand,logo ,category_id} = category
	return (
		<div className="container">
			<div className="card card-compact w-96 bg-base-100 shadow-xl transform transition duration-500 hover:scale-105 hover:bg-rose-400">
				<figure>
					<img className="w-96 h-80" src={logo} alt="Shoes" />
				</figure>
				<div className="card-body">
					<h2 className="card-title">{brand}</h2>
					
					<div className="card-actions justify-center">
						<Link to={`/category/${category_id}`}><button className="btn bg-red-700 hover:bg-red-500 ">See All</button></Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CategoryCard;
