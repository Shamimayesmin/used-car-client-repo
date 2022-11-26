import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { getRole } from '../api/user';
import Sidebar from '../components/Dashboard/Sidebar';
import Spinner from '../components/Spinner/Spinner';
import { AuthContext } from '../context/AuthProvider';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {

    const {user} = useContext(AuthContext)
    // const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
        <Navbar></Navbar>
        <div className="drawer drawer-mobile">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet></Outlet>
                
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 text-base-content">
                    
                    <li>
                        <Link to='/dashboard/my-orders'>My orders</Link>
                    </li>
                    <li>
                                <Link to='/dashboard/addproduct'>Add A Product</Link>
                            </li>

                    
                    
                    {
                        // isAdmin && 
                        <>
                            <li>
                                <Link to='/dashboard/allseller'>All Sellers</Link>
                            </li>
                            <li>
                                <Link to='/dashboard/allbuyer'>All Buyers</Link>
                            </li>
                            

                            {/* <li>
                                <Link to='/dashboard/addproduct'>Add A Product</Link>
                            </li> */}
                            <li>
                                <Link to='/dashboard/myproduct'>My Products</Link>
                            </li>
                            {/* <li>
                                <Link to='/dashboard/managedoctors'>Manage doctors</Link>
                            </li> */}
                        </>
                    }
                    
                </ul>
            </div>
        </div>
    </div>
    );
};

export default DashboardLayout;