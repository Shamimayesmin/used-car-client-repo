import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AddvertiseCard from './AddvertiseCard';

const Advertise = () => {
    //get the advertised items
    const { data: addvertises } = useQuery({
        queryKey: ['advertise'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/advertise');
            const data = res.json();
            return data;
        }
    })
    console.log(addvertises);
    //do not show the advertisement section if no product
    // if (addvertises?.length === 0) {
    //     return <div></div>
    // }
    return (
        <section>
			<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between sm:w-full">
				<div className="justify-center mx-auto rounded-lg">
					<h3 className="text-2xl font-mono p-4 text-red-600">
						Advertised Products
					</h3>

					<div className="grid sm:grid-cols-1 lg:grid-cols-3 p-3 gap-8">
						{addvertises &&
							addvertises?.map((item) => (
								<AddvertiseCard
									key={item._id}
									item={item}
									// setAddProducts={setAddProducts}
								></AddvertiseCard>
							))}
					</div>
				</div>
			</div>
			
		</section>
    );
};

export default Advertise;