import React from "react";

const Feature = () => {
	return (
		<div>
			<section className="dark:bg-gray-800 dark:text-gray-100">
				<div className="container flex flex-col-reverse mx-auto lg:flex-row">
					<div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-violet-400 dark:text-gray-900">
						<div className="flex space-x-2 sm:space-x-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								className="flex-shrink-0 w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
								></path>
							</svg>
							<div className="space-y-2">
								<p className="text-lg font-medium leading-snug">
								Cinematic Experience
								</p>
								<p className="leading-snug">
								A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.
								</p>
							</div>
						</div>
						<div className="flex space-x-2 sm:space-x-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								className="flex-shrink-0 w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
								></path>
							</svg>
							<div className="space-y-2">
								<p className="text-lg font-medium leading-snug">
								Yoke Steering
								</p>
								<p className="leading-snug">
								A bold new approach to steering offers better feel and an unobstructed view of the road ahead. Tap the brake and Model X automatically selects the correct direction to start your trip.
								</p>
							</div>
						</div>
						<div className="flex space-x-2 sm:space-x-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								className="flex-shrink-0 w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
								></path>
							</svg>
							<div className="space-y-2">
								<p className="text-lg font-medium leading-snug">
								Perfect Environment
								</p>
								<p className="leading-snug">
								Experience clean and powerful cabin conditioning from hidden vents. Tri-zone temperature controls, ventilated front seats and HEPA filtration come standard.
								</p>
							</div>
						</div>
					</div>
					<div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-800">
						<div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
							<img
								src="https://stimg.cardekho.com/images/carexteriorimages/630x420/BMW/X3/9776/1680242353464/front-left-side-47.jpg?tr=w-150"
								alt=""
								className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96"
							/>
						</div>
					</div>
				</div>
			</section>
{/* new section */}
			<div
				className="hero min-h-screen"
				style={{
					backgroundImage: "url('https://images.statusfacebook.com/profile_pictures/cars/cars_profile_pictures_04.jpg')",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
				}}
			>
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content text-center text-neutral-content">
					<div className="max-w-md">
						<h1 className="mb-5 text-5xl font-bold">Designed for Efficiency</h1>
						<p className="mb-5">
						Model Y has a drag coefficient of just .24 Cd, the lowest of any production SUV on the planet. Refined aerodynamic elements work together with new wheels and tires to help you travel farther, with sharper handling and better ride comfort.
						</p>
						
					</div>
				</div>
			</div>
		</div>
	);
};

export default Feature;
