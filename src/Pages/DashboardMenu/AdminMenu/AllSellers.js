import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';
import Seller from './Seller';

const AllSellers = () => {

    const [allSeller, setAllSeller] = useState([])

    useEffect(()=>{
	    fetch('http://localhost:5000/users/seller')
	    .then(res => res.json())
	    // .then(data => console.log(data))
	    .then(data =>  setAllSeller(data))
	},[])


    const handleDeleteSeller = (id) => {
		fetch(
			`http://localhost:5000/users/${id}`,
			{
				method: "DELETE",
				headers: {
					authorization: `bearer ${localStorage.getItem("usedcarToken")}`,
				},
			}
		)
			.then((res) => res.json())
			.then((data) => {
				if (data.deletedCount > 0) {
					// refetch();
					toast.success(`Buyer ${id.name} deleted successfully`);
                    const reamaining =allSeller.filter((odr) => odr._id !== id);
                    setAllSeller(reamaining);
				}
				console.log(data);
			});
	};
    
    return (
        <div>
			<h2 className="text-3xl text-center m-7 font-semibold text-red-500">All Sellers</h2>

			<div className="overflow-x-auto">
				<table className="table w-full">
					<thead>
						<tr>
							<th></th>
							<th>Name</th>
							<th>Email</th>
							<th>Role</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
                        {
                            allSeller?.map((user,i)=><Seller i={i} key={user._id} user={user} handleDeleteSeller={handleDeleteSeller}></Seller>)
                        }
						
					</tbody>
				</table>
			</div>
		</div>
    );
};

export default AllSellers;