import React from "react";

const NewFeture = () => {
	return (
		<section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
			<div className="container mx-auto space-y-12">
				<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
					<img
						src="https://st3.depositphotos.com/10820522/36256/i/600/depositphotos_362569560-stock-photo-red-luxury-model-sport-car.jpg"
						alt=""
						className="h-80 dark:bg-gray-500 aspect-video"
					/>
					<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
						<span className="text-xs uppercase dark:text-gray-400">
							Join, it's free
						</span>
						<h3 className="text-3xl font-bold">
							We're not reinventing the wheel
						</h3>
						<p className="my-6 dark:text-gray-400">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
							aliquam possimus quas, error esse quos.
						</p>
						<button type="button" className="self-start">
							Action
						</button>
					</div>
				</div>
				<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
					<img
						src="https://www.financialexpress.com/wp-content/uploads/2020/06/Tesla-Model_S-2017-660.jpg"
						alt=""
						className="h-80 dark:bg-gray-500 aspect-video"
					/>
					<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
						<span className="text-xs uppercase dark:text-gray-400">
							Join, it's free
						</span>
						<h3 className="text-3xl font-bold">
							We're not reinventing the wheel
						</h3>
						<p className="my-6 dark:text-gray-400">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
							aliquam possimus quas, error esse quos.
						</p>
						<button type="button" className="self-start">
							Action
						</button>
					</div>
				</div>
				<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
					<img
						src="https://www.drivespark.com/images/2022-05/bmw-m4-csl-9.jpg"
						alt=""
						className="h-80 dark:bg-gray-500 aspect-video"
					/>
					<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
						<span className="text-xs uppercase dark:text-gray-400">
							Join, it's free
						</span>
						<h3 className="text-3xl font-bold">
							We're not reinventing the wheel
						</h3>
						<p className="my-6 dark:text-gray-400">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
							aliquam possimus quas, error esse quos.
						</p>
						<button type="button" className="self-start">
							Action
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NewFeture;
