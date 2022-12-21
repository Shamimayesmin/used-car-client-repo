import React, { } from 'react';
import { Link, } from 'react-router-dom';

const AddvertiseCard = ({item}) => {
    const {title,image,resalePrice,product_id} = item
    
    // console.log(item);

    return (
        <div>
			<div className="card card-compact w-96 bg-base-100 shadow-xl">
				<figure>
					<img className="w-96 h-80" src={image} alt="Shoes" />
				</figure>
				<div className="card-body">
					<h2 className="card-title">{title}</h2>
                    <p>Offer Price : ${resalePrice}</p>
					
					<div className="card-actions justify-center">
						<Link to={`/category/${product_id}`}><button className="btn bg-red-700 hover:bg-red-500 ">Details</button></Link>
					</div>
				</div>
			</div>
		</div>
    );
};

export default AddvertiseCard;