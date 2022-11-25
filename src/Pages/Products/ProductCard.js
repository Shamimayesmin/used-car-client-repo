import React from "react";

const ProductCard = ({ item }) => {

    const {image,location,orginalPrice,resalePrice,title} = item
    

	console.log(item);
	// const {} = item
	return (
		<div className="card w-96 bg-base-100 shadow-xl">
			<figure>
				<img src={image} alt="Shoes" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">
					{title}
					<div className="badge badge-secondary">NEW</div>
				</h2>
				<p>If a dog chews shoes whose shoes does he choose?</p>
				<div className="card-actions justify-end">
					<div className="badge badge-outline">Fashion</div>
					<div className="badge badge-outline">Products</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
