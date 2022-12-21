import React, { useContext } from "react";
import { FaCheckCircle, } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../../../context/AuthProvider";
// import useSeller from "../../../hook/useSeller";

const Seller = ({ sale, i, handleDeleteSeller, handleMakeVerify}) => {
	// console.log(sale);
	const { email, name, role, _id ,verifyStatus} = sale;
	
	return (
		<>
			<tr>
				<th>{i + 1}</th>
				<td>
					<div className="flex justify-around items-center">
					<h2>{name}</h2>
					<h2>{verifyStatus && <FaCheckCircle className="text-blue-500"></FaCheckCircle>}</h2>
					
					
					</div>
				</td>
				<td>{email}
				</td>
				<td>{role}</td>
				<td>
					
						<button
							onClick={() => handleMakeVerify(_id)}
							disabled={verifyStatus}
							className="btn btn-xs btn-primary"
						>
							{verifyStatus ? 'verified' : 'verify'}
						</button>
					
				</td>
				<td>
					<button
						onClick={() => handleDeleteSeller(_id)}
						className="btn btn-xs btn-accent"
					>
						Delete
					</button>
				</td>
			</tr>
		</>
	);
};

export default Seller;
