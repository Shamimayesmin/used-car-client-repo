import React, { useContext,  } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const Navbar = () => {
	const { user, logout } = useContext(AuthContext);
	const navegate = useNavigate();
	

	const handleLogOut = () => {
		logout()
			.then(() => {})
			.catch((err) => console.error(err));
			navegate('/login')
	};


	const menuItems = <React.Fragment>
	                
					<li className ='hover:bg-red-500 rounded-2xl'>
						<Link to="/">Home</Link>
					</li>
					<li className ='hover:bg-red-500 rounded-2xl'>
						<Link to="/blog">Blog</Link>
					</li>

					{
						user?.uid?
					<li>
						<li className ='hover:bg-red-500 rounded-2xl'>
							<Link to="/dashboard">Dashboard</Link>
						</li>
						<button className="hover:bg-red-500 rounded-3xl" onClick={handleLogOut}>Sign Out</button>
					</li>
					:
					<li className="hover:bg-red-500 rounded-3xl" >
						<Link to="/login">Login</Link>
					</li>
					}

	</React.Fragment>
	return (
		<div className="navbar flex justify-between w-full bg-black text-white">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex={1}
						className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-black text-white"
					>

						{menuItems}
						
					</ul>
				</div>
				<Link to='/' className="btn bg-red-700 normal-case text-xl">
					CarSale
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal p-0 bg-black text-white">

					{menuItems}
					
				</ul>
			</div>

			<label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
			</label>

			
		</div>
		
	);
};

export default Navbar;
