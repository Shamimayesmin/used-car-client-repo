import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

const Products = () => {
    const allCategory = useLoaderData()
    // const all = data.products
    
    console.log(allCategory);
    const [products, setProducts] = useState()



    return (
        <div>
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between sm:w-full">
				
				<div class="lg:w-2/3 justify-center mx-auto rounded-lg">
					<h3 className="text-2xl font-mono p-4 text-white">
						Our All Category: {allCategory.length}
					</h3>

					<div className="grid sm:grid-cols-1 lg:grid-cols-2 justify-center p-3 gap-8 mx-auto">
						{allCategory?.map((item) => (
							<ProductCard key={item._id} item={item}></ProductCard>
						))}
					</div>
				</div>
			</div>
        </div>
    );
};

export default Products;