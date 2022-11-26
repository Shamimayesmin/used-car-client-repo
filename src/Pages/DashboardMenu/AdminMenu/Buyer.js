import React from 'react';

const Buyer = ({buyer,i,handleDeleteBuyer}) => {
    const {email,role,name ,_id} = buyer
    return (
        <>
			<tr>
				<th>{i + 1}</th>
				<td>{name}</td>
				<td>{email}</td>
				<td>{role}</td>
				{/* <td>
									{user?.role !== "admin" && (
										<button
											onClick={() => handleMakeAdmin(user._id)}
											className="btn btn-xs btn-primary"
										>
											Make Admin
										</button>
									)}
								</td> */}
				<td>
					<button onClick={()=>handleDeleteBuyer(_id)} className="btn btn-xs btn-accent">Delete</button>
				</td>
			</tr>
		</>
    );
};

export default Buyer;