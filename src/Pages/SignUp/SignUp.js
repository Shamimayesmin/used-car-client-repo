import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import {
	Link,
	useLoaderData,
	useLocation,
	useNavigate,
} from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
// import { saveUser, setAuthToken } from "../../api/auth";
import SmallSpinner from "../../components/Spinner/SmallSpinner";
import { AuthContext } from "../../context/AuthProvider";
import useToken from "../../hook/useToken";
// import { AuthContext } from "../../context/AuthProvider";

const SignUp = () => {
	const { createUser, updateUser, signInWithGoogle, loading, setLoading } =
		useContext(AuthContext);

	const [error, setError] = useState("");

	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

	// get jwt token hook :
	const [createUserEmail, setCreateUserEmail] = useState("");
	const [token] = useToken(createUserEmail);

	if (token) {
		navigate(from, { replace: true });
	}

	const handleSignUp = (event) => {
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
				// setAuthToken(result.user);
				const user = result.user;
				console.log(user);
				form.reset();
				setError("");

				toast.success("successfully sing up");
				const userInfo = {
					displayName: name,
					userRole: role,
				};

				updateUser(userInfo)
					.then(() => {
						saveUser(name, email, role);
						// console.log(user);
					})
					.catch((err) => console.log(err));
				// navigate(from, { replace: true });
			})
			.catch((error) => {
				console.error(error);
				setError(error.message);
				setLoading(false);
			});
	};

	const handleGoogleSignIn = () => {
		signInWithGoogle().then((result) => {
			const user = result.user;
			console.log(user);
			const currentUser = {
				email : user.email
			}
			// get token
			saveUser(currentUser)
			
			navigate(from, { replace: true });
		});
	};

	const saveUser = (name, email, role) => {
		const user = { name, email, role };
		fetch(" https://used-car-server.vercel.app/users", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(user),
		})
			.then((res) => res.json())
			.then((data) => {
				// console.log('save user',data);
				setCreateUserEmail(email);
			});
	};
	return (
		<div>
			<div className="h-[800px] flex justify-center items-center m-40 w-96 mx-auto">
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
								className="select select-bordered w-full max-w-xs"
							>
								<option selected>seller</option>
								<option>buyer</option>
							</select>

							{error && <p className="text-red-500">{error}</p>}
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
							<button className="btn btn-primary">
								{loading ? <SmallSpinner></SmallSpinner> : "Sign Up"}
							</button>
						</div>
					</form>
					<small>
						<p>
							New to CarSale?{" "}
							<Link className="link link-hover text-secondary" to="/login">
								Login
							</Link>
						</p>
					</small>
					<div className="divider">OR</div>
					<div className="form-control mt-6">
						<button onClick={handleGoogleSignIn} className="btn btn-secondary">
							Google sign in
						</button>
						{/* <SocialLogin></SocialLogin> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
