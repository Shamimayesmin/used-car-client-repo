import React from "react";

const Blog = () => {
	return (
		<div>
			<section className="dark:bg-gray-800 dark:text-gray-100">
				<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
					<h2 className="text-2xl font-semibold sm:text-4xl">
						Frequently Asked Questions
					</h2>

					<div className="space-y-4">
						<details className="w-full border rounded-lg">
							<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
								What are the different ways to manage a state in a React
								application?
							</summary>
							<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
								<p>
									Local (UI) state – Local state is data we manage in one or
									another component. Local state is most often managed in React
									using the useState hook. For example, local state would be
									needed to show or hide a modal component or to track values
									for a form component, such as form submission, when the form
									is disabled and the values of a form’s inputs
								</p>
								<p>
									Global (UI) state – Global state is data we manage across
									multiple components. Global state is necessary when we want to
									get and update data anywhere in our app, or in multiple
									components at least. A common example of global state is
									authenticated user state. If a user is logged into our app, it
									is necessary to get and change their data throughout our
									application. Sometimes state we think should be local might
									become global.
								</p>
								<p>
									Server state – Data that comes from an external server that
									must be integrated with our UI state. Server state is a simple
									concept, but can be hard to manage alongside all of our local
									and global UI state. There are several pieces of state that
									must be managed every time you fetch or update data from an
									external server, including loading and error state.
									Fortunately there are tools such as SWR and React Query that
									make managing server state much easier.
								</p>
								<p>
									URL state – Data that exists on our URLs, including the
									pathname and query parameters. URL state is often missing as a
									category of state, but it is an important one. In many cases,
									a lot of major parts of our application rely upon accessing
									URL state. Try to imagine building a blog without being able
									to fetch a post based off of its slug or id that is located in
									the URL! There are undoubtedly more pieces of state that we
									could identify, but these are the major categories worth
									focusing on for most applications you build.
								</p>
							</p>
						</details>
						<details className="w-full border rounded-lg">
							<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
								How does prototypical inheritance work?
							</summary>
							<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
								The Prototypal Inheritance is a feature in javascript used to
								add methods and properties in objects. It is a method by which
								an object can inherit the properties and methods of another
								object. Traditionally, in order to get and set the [[Prototype]]
								of an object, we use Object.getPrototypeOf and Object.
							</p>
						</details>
						<details className="w-full border rounded-lg">
							<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
								What is a unit test?Why should we write unit tests?
							</summary>
							<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
								<p>
									A unit test is a way of testing a unit - the smallest piece of
									code that can be logically isolated in a system. In most
									programming languages, that is a function, a subroutine, a
									method or property. The isolated part of the definition is
									important. In his book "Working Effectively with Legacy Code",
									author Michael Feathers states that such tests are not unit
									tests when they rely on external systems: “If it talks to the
									database, it talks across the network, it touches the file
									system, it requires system configuration, or it can't be run
									at the same time as any other test."
								</p>
							</p>
							<p>
								They enable you to catch bugs early in the development process.
								Automated unit tests help a great deal with regression testing.
								They detect code smells in your codebase. For example, if you’re
								having a hard time writing unit tests for a piece of code, it
								might be a sign that your function is too complex.
							</p>
						</details>
                        <details className="w-full border rounded-lg">
							<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                            React vs. Angular vs. Vue?
							</summary>
							<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
								<p>The main difference between frameworks and libraries is regarding control of the application. In the case of a library, you are in full control. You implement the library when and where required. The situation is quite the opposite in the case of a framework - the framework allows you to add a little code here and there for customization but it will decide whether or not to use all of your code.</p>
                                <p>Angular JS, a framework created by Google in 2010</p>
                                <p>React JS, a library created by Facebook in 2013</p>
                                <p>Vue JS, a framework created by Google employee Evan You (the reason why Vue has all the robust features of Angular baked into it)</p>
							</p>

						</details>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Blog;
