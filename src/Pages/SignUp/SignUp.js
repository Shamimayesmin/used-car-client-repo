import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setAuthToken } from "../../api/auth";
import SmallSpinner from "../../components/Spinner/SmallSpinner";
import { AuthContext } from "../../context/AuthProvider";
// import { AuthContext } from "../../context/AuthProvider";

const SignUp = () => {
	const {
		createUser,
        updateUser,
		signInWithGoogle,
		loading,
		setLoading,
	} = useContext(AuthContext);

    const [error, setError] = useState("");

	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

	const handleSignUp = (event) => {
        console.log(event);
		event.preventDefault();

        const form = event.target;
		const name = form.name.value;

		const email = form.email.value;
		const password = form.password.value;
		const role = form.role.value;
        console.log(name, password, email, role);

        createUser(email, password)
			.then((result) => {
                // get token
				// setAuthToken(result.user)
				const user = result.user;
				console.log(user);
				form.reset();
				setError("");
                
               
                toast.success('successfully sing up')
                const userInfo = {
					displayName: name,
				};

                updateUser(userInfo)
					.then(() => {
                        
						// console.log(user);
					})
					.catch((err) => console.log(err));
                    navigate(from, { replace: true });
			})
			.catch((error) => {
				console.error(error);
				setError(error.message);
                setLoading(false)
			});

	};

	const handleGoogleSignIn = () => {
		signInWithGoogle().then((result) => {
			const user = result.user;
			console.log(user);
			// get token
			// setAuthToken(result.user)
			navigate(from, { replace: true });
		});
	};
	return (
		<div>
			<div className="h-[800px] flex justify-center items-center">
				
					<div className="w-96 rounded-lg p-7 shadow-2xl">
                    <h2 className="text-2xl text-center">Sign Up</h2>
						<form onSubmit={handleSignUp} className="card-body">
							<div className="form-control">
								<label className="label">
									<span className="label-text">Name</span>
								</label>
								<input
									type="text"
                                    name="name"
                                    id="name"
                                    placeholder="name"
									className="input input-bordered"
								/>
							</div>
							<div className="form-control w-full max-w-xs">
					<label className="label">
						<span className="label-text">Role</span>
					</label>
					<select
                       type="text"
                       name="role"
                       id="role"
						// {...register("specialty")}
						className="select select-bordered w-full max-w-xs"
					>
                        <option selected>User</option>
                        <option>Seller</option>
						{/* {specialties.map((specialty) => (
							<option key={specialty._id} value={specialty.name}>
								{specialty.name}
							</option>
						))} */}
					</select>

					{/* {error && <p className='text-red-500'>{error}</p>} */}
				</div>
							
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input
									type="email"
                                    name="email"
                                    id="email"
                                    required
									placeholder="email"
									className="input input-bordered"
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input
									type="password"
                                    name="password"
                                    id="password"
                                    required
									placeholder="password"
									className="input input-bordered"
								/>
								<label className="label">
									<a href="/" className="label-text-alt link link-hover">
										Forgot password?
									</a>
								</label>
                                <p className="text-red-500">{error}</p>
							</div>
							<div className="form-control mt-6">
								<button className="btn btn-primary">{ loading? <SmallSpinner></SmallSpinner> : 'Sign Up'}</button>
							</div>
							<div className="form-control mt-6">
								<button onClick={handleGoogleSignIn} className="btn btn-secondary">Google sign in</button>
							</div>
						</form>
					</div>
				
			</div>
		</div>
	);
};

export default SignUp;
