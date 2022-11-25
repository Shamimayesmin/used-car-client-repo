import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setAuthToken } from "../../api/auth";
import SmallSpinner from "../../components/Spinner/SmallSpinner";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
    const { signin,signInWithGoogle,loading,
        setLoading} = useContext(AuthContext);

        const [error, setError] = useState("");

        const navigate = useNavigate()
        const location = useLocation()
        const from = location.state?.from?.pathname || '/'


    const handleLogin = (event) => {
		event.preventDefault();

		const email = event.target.email.value;
		const password = event.target.password.value;
		
        signin(email,password)
        .then(result =>{
            const user = result.user
            console.log(user);
            toast.success('login successful')
			// get token
			// setAuthToken(result.user)
            navigate(from,{replace:true})
        })
		.catch(err => {
			toast.error(err.message)
			console.log(err);
			setLoading(false)
		})
		
                
	};


    const handleGoogleSignIn=()=>{
        signInWithGoogle()
        .then(result =>{
            const user = result.user
            console.log(user);
			// setAuthToken(result.user)
			navigate(from,{replace:true})
        })
    }

	return (
        <div className="h-[800px] flex justify-center items-center">
				
        <div className="w-96 rounded-lg p-7 shadow-2xl">
        <h2 className="text-2xl text-center">Sign Up</h2>
            <form onSubmit={handleLogin} className="card-body">
              
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
                    <button className="btn btn-primary">{ loading? <SmallSpinner></SmallSpinner> : 'Login'}</button>
                </div>
                <div className="form-control mt-6">
                    <button onClick={handleGoogleSignIn} className="btn btn-secondary">Google sign in</button>
                </div>
            </form>
        </div>
    
</div>
	);
};

export default Login;
