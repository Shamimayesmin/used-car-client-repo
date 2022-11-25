import React, { useEffect, useState } from 'react';
import { useActionData } from 'react-router-dom';
import CategoryCard from './CategoryCard';

const Category = () => {
    // const data = useActionData()
    // console.log(data);
    const [categories, setCategory] = useState([])

    useEffect(()=>{
	    fetch('http://localhost:5000/category')
	    .then(res => res.json())
	    // .then(data => console.log(data))
	    .then(data => setCategory(data))
	},[])
    return (
        <div>
            <h2 className='text-center text-2xl text-red-600 font-bold'>All Categories</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 mb-20'>
                {
                    categories?.map(category => <CategoryCard key={category._id} category={category}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default Category;