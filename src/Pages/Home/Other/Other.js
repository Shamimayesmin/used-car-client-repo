import React from "react";
import img from '../../../assets/images/modelX.jpg'

const Other = () => {
	return (
		<div className="p-5 container mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100">
			<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
				<img
					src={img}
					alt=""
					className="w-full h-60 sm:h-96 dark:bg-gray-500 object-fill"
				/>
				<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900 bg-slate-400">
					<div className="space-y-2">
						<a
							rel="noopener noreferrer"
							href="/"
							className="inline-block text-2xl font-semibold sm:text-3xl"
						>
							The Best quality car from the popular brands
						</a>
						
					</div>
					<div className="dark:text-gray-100">
						<p>Insert the actual text content here...</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Other;
