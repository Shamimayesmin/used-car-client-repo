import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({category}) => {
    const {brand,logo ,_id,category_id} = category
	return (
		<div>
			<div className="card card-compact w-96 bg-base-100 shadow-xl">
				<figure>
					<img className="w-96 h-80" src={logo} alt="Shoes" />
				</figure>
				<div className="card-body">
					<h2 className="card-title">{brand}</h2>
					
					<div className="card-actions justify-end">
						<Link to={`/brands/${category_id}`}><button className="btn bg-red-700 hover:bg-red-500 ">See All</button></Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CategoryCard;
