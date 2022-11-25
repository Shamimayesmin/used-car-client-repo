import React from 'react';
import { FingerPrintIcon,UserPlusIcon } from '@heroicons/react/24/solid'
import { NavLink } from 'react-router-dom';

const SellerMenu = () => {
    return (
        <>
        <NavLink
          to='add-product'
          className={({ isActive }) =>
            `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
              isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
            }`
          }
        >
          <FingerPrintIcon className='w-5 h-5' />
  
          <span className='mx-4 font-medium'>Add A product</span>
        </NavLink>
  
        <NavLink
          to='my-product'
          className={({ isActive }) =>
            `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
              isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
            }`
          }
        >
          <UserPlusIcon className='w-5 h-5' />
  
          <span className='mx-4 font-medium'>My Products</span>
        </NavLink>
      </>
    );
};

export default SellerMenu;