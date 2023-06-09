import React from "react";

const PlaceForEverything = () => {
	return (
		<section className="dark:bg-gray-800 dark:text-gray-300 container">
			<div className="container flex flex-col mx-auto lg:flex-row">
				<div
					className="w-full lg:w-1/3"
					style={{
						backgroundImage: "url('https://images.statusfacebook.com/profile_pictures/cars/cars_profile_pictures_04.jpg')",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
					}}
				></div>
				<div className="flex bg-slate-50 flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						className="w-8 h-8 mb-8 dark:text-violet-400"
					>
						<path
							fillRule="evenodd"
							d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
							clipRule="evenodd"
						></path>
					</svg>
					<h2 data-aos="fade-left" data-aos-duration="3000" className="text-3xl font-semibold leading-none">
                    A Place For Everything
					</h2>
					<p data-aos="fade-left" data-aos-duration="1500"  className="mt-4 mb-8 text-sm">
                    Model Y provides maximum versatility—able to carry 7 passengers and their cargo. Each second row seat folds flat independently, creating flexible storage for skis, furniture, luggage and more. The liftgate opens to a low trunk floor that makes loading and unloading easy and quick. Chat with a Tesla Advisor to learn more about Model Y or schedule a demo drive today.
					</p>
					<button className="self-start px-10 bg-red-600 py-3 text-lg font-medium rounded-3xl text-white dark:bg-violet-400 dark:text-gray-900">
						Get started
					</button>
				</div>
			</div>
		</section>
	);
};

export default PlaceForEverything;
