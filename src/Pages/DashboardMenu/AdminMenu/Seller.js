import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import useSeller from "../../../hook/useSeller";

const Seller = ({ sale, i, handleDeleteSeller, handleMakeVerify}) => {
	// console.log(user);
	const { email, name, role, _id } = sale;
	// const { user } = useContext(AuthContext);
	// const [isSeller] = useSeller(user?.email)
	return (
		<>
			<tr>
				<th>{i + 1}</th>
				<td>{name}</td>
				<td>{email}</td>
				<td>{role}</td>
				<td>
					{role === "seller" && (
						<button
							onClick={() => handleMakeVerify(_id)}
							className="btn btn-xs btn-primary"
						>
							Verify
						</button>
					)}
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
