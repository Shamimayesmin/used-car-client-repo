import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
// import { getRole } from '../api/user';
// import Sidebar from '../components/Dashboard/Sidebar';
// import Spinner from '../components/Spinner/Spinner';
import { AuthContext } from "../context/AuthProvider";
import useAdmin from "../hook/useAdmin";
import useBuyer from "../hook/useBuyer";
import useSeller from "../hook/useSeller";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
	const { user } = useContext(AuthContext);
	const [isAdmin] = useBuyer(user?.email);

	// const [isBuyer] = useBuyer(user?.email);
	const [isSeller] = useSeller(user?.email);

	return (
		<div>
			<Navbar></Navbar>
			<div className="drawer drawer-mobile">
				<input
					id="dashboard-drawer"
					type="checkbox"
					className="drawer-toggle"
				/>
				<div className="drawer-content">
					<Outlet></Outlet>
				</div>
				<div className="drawer-side bg-slate-50">
					<label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
					<ul className="menu p-4 w-80">
						
                        {/* <li className="hover:bg-red-600 hover:text-white rounded-lg">
							<Link to="/dashboard/allseller">All Sellers</Link>
						</li>
						<li className="hover:bg-red-600 hover:text-white rounded-lg">
							<Link to="/dashboard/allbuyer">All Buyers</Link>
						</li> */}
                        {/* <li className="hover:bg-red-600 hover:text-white rounded-lg">
							<Link to="/dashboard/my-orders">My orders</Link>
						</li> */}

						 {user?.uid && !isAdmin && !isSeller &&
							<>
								<li className="hover:bg-red-600 hover:text-white rounded-lg">
									<Link to="/dashboard/my-orders">My orders</Link>
								</li>
                                
							</>
						} 
						

						 {
                        //  isAdmin && 
							<>
								<li>
									<Link to="/dashboard/allseller">All Sellers</Link>
								</li>
								<li>
									<Link to="/dashboard/allbuyer">All Buyers</Link>
								</li>
							</>
						} 

						{isSeller && (
							<>
								<li className="hover:bg-red-600 hover:text-white rounded-lg">
									<Link to="/dashboard/addproduct">Add A Product</Link>
								</li>
								<li className="hover:bg-red-600 hover:text-white rounded-lg">
									<Link to="/dashboard/myproduct">My Products</Link>
								</li>
							</>
						)}

					
					</ul>
				</div>
			</div>
		</div>
	);
};

export default DashboardLayout;
