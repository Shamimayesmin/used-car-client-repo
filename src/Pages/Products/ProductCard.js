import { getRoles } from "@testing-library/react";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import img from '../../assets/images/people1.png'

const ProductCard = ({ item, setAddProducts }) => {
	const {
		image,
		location,
		orginalPrice,
		resalePrice,
		title,
		role,
		description,
		used,
	} = item;

	// console.log(item);
	// const {} = item
	return (
		<div className="card w-96 bg-base-100 shadow-xl">
			<figure>
				<img className="w-96 h-72" src={image} alt="Shoes" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">
					{title}
					<div className="badge badge-secondary">{role[0]}</div>
				</h2>
				<p>{description}</p>
				<div>
					<p className="font-bold">Orginal-price : ${orginalPrice}</p>
					<p className="font-bold">Resale-Price : ${resalePrice}</p>
				</div>
				<div className="card-actions justify-center items-center">
					<div className="badge badge-outline">Used : {used} months</div>
					<div className="badge badge-outline">location : {location}</div>
				</div>

				<div className="card-actions justify-between mt-5 mb-5">
					<div className="avatar gap-2">
						<div className="w-10 h-10 rounded-full">
							<img src={img} alt='/'/>
						</div>
						<div>
							<h2>{role[1]}</h2>
							<h2><FaCheckCircle className="text-blue-500"></FaCheckCircle></h2>
						</div>
					</div>

					<div>
						<label
							disabled={role.length ===0} 
							onClick={() => setAddProducts(item)}
							htmlFor="booking-modal"
							className="btn btn-error bg-gradient-to-r from-error to-secondary text-white"
						>
							Book Now
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
