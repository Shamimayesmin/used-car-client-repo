import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Buyer from './Buyer';

const AllBuyers = () => {
    const [allbuyer, setAllBuyer] = useState([])

    useEffect(()=>{
	    fetch('http://localhost:5000/users/buyer')
	    .then(res => res.json())
	    // .then(data => console.log(data))
	    .then(data => setAllBuyer(data))
	},[])


    const handleDeleteBuyer = (id) => {
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
                    const reamaining =allbuyer.filter((odr) => odr._id !== id);
                    setAllBuyer(reamaining);
				}
				console.log(data);
			});
	};

    return (
        <div>
        <h2 className="text-3xl text-center m-7 font-semibold text-red-500">All Buyers</h2>

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
                        allbuyer?.map((buyer,i)=><Buyer i={i} key={buyer._id} buyer={buyer} handleDeleteBuyer={handleDeleteBuyer}></Buyer>)
                    }
                    
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default AllBuyers;