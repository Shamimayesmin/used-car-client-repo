import React from "react";

const GoAnyWhere = () => {
	return (
		<section className="container p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
			<div className="container mx-auto space-y-12">
				<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
					<img
						src="https://st3.depositphotos.com/10820522/36256/i/600/depositphotos_362569560-stock-photo-red-luxury-model-sport-car.jpg"
						alt=""
						className="h-80 dark:bg-gray-500 aspect-video rounded-md"
					/>
					<div data-aos="fade-left" data-aos-duration="3000" className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
						
						<h3 className="text-3xl font-bold">
                        Go Anywhere
						</h3>
						<p className="my-6 dark:text-gray-400">
                        With up to 405 miles of estimated range and access to the world’s largest and most powerful fast charging network, you’ll spend less time plugged in and more time on the road. Chat with a Tesla Advisor to learn more about Model S or schedule a demo drive today.Our all-glass roof makes the cabin feel open and airy, complete with extra headroom and unobstructed views of land and sky. Layers of acoustic glass provide a quiet ride as well as protection from glare, heat and UV rays—even on hot days.
						</p>
						{/* <button type="button" className="self-start bg-red-600">
							Action
						</button> */}
					</div>
				</div>
				<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
					<img
						src="https://www.financialexpress.com/wp-content/uploads/2020/06/Tesla-Model_S-2017-660.jpg"
						alt=""
						className="h-80 dark:bg-gray-500 aspect-video rounded-md"
					/>
					<div data-aos="fade-right" data-aos-duration="3000" className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
						
						<h3 className="text-3xl font-bold">
                        Dual Motor
						</h3>
						<p className="my-6 dark:text-gray-400">
                        Tesla All-Wheel Drive has two ultra-responsive, independent electric motors that digitally control torque to the front and rear wheels—for far better handling, traction and stability control. Model Y is capable in rain, snow, mud and off-road.Model Y is fully electric, so you never need to visit a gas station again. If you charge overnight at home, you can wake up to a full battery every morning. And when you’re on the road, it’s easy to plug in along the way—at any public station or with the Tesla charging network. We currently have over 45,000 Superchargers worldwide, with six new locations opening every week.
						</p>
						
					</div>
				</div>
				<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
					<img
						src="https://www.drivespark.com/images/2022-05/bmw-m4-csl-9.jpg"
						alt=""
						className="h-80 dark:bg-gray-500 aspect-video rounded-md"
					/>
					<div data-aos="fade-left" data-aos-duration="3000" className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
						
						<h3 className="text-3xl font-bold">
                        Even More Capable
						</h3>
						<p className="my-6 dark:text-gray-400">
                        With ample storage and 5,000 lbs of towing capacity, Model X is built for maximum utility. Front doors open and close automatically, Falcon Wing rear doors allow for easier loading and a trailer hitch comes standard, so you can bring your gear with you wherever you go.
                        Model X has a drag coefficient of just .24 Cd, the lowest of any production SUV on the planet. Refined aerodynamic elements work together with new wheels and tires to help you travel farther, with sharper handling and better ride comfort.
						</p>
						
					</div>
				</div>
			</div>
		</section>
	);
};

export default GoAnyWhere;
