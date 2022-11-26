import React from "react";

const Seller = ({ user, i ,handleDeleteSeller}) => {
    console.log(user);
    const {email,name,role,_id} = user
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
					<button onClick={()=>handleDeleteSeller(_id)} className="btn btn-xs btn-accent">Delete</button>
				</td>
			</tr>
		</>
	);
};

export default Seller;
