import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

    const handleAddProduct = (data) =>{
        console.log(data);
    }
    return (
        <div className="w-96 mx-auto rounded-lg p-7 shadow-2xl m-20">
			<h2 className="text-3xl">Add A Doctor</h2>
			<form onSubmit={handleSubmit(handleAddProduct)}>
				<div className="form-control w-full max-w-xs">
					<label className="label">
						<span className="label-text">Name</span>
					</label>

					<input
						{...register("name", { required: "Name is required" })}
						type="text"
						placeholder="Type here"
						className="input input-bordered w-full max-w-xs"
					/>
					{errors.name && (
						<p className="text-red-500">{errors.name?.message}</p>
					)}
				</div>
				<div className="form-control w-full max-w-xs">
					<label className="label">
						<span className="label-text">Email</span>
					</label>

					<input
						{...register("email", { required: "Email is required" })}
						type="email"
						placeholder="Type here"
						className="input input-bordered w-full max-w-xs"
					/>
					{errors.email && (
						<p className="text-red-500">{errors.email?.message}</p>
					)}
				</div>
				<div className="form-control w-full max-w-xs">
					<label className="label">
						<span className="label-text">Specialty</span>
					</label>
					<select
						{...register("specialty")}
						className="select select-bordered w-full max-w-xs"
					>
						{/* {specialties.map((specialty) => (
							<option key={specialty._id} value={specialty.name}>
								{specialty.name}
							</option>
						))} */}
					</select>

					{/* {error && <p className='text-red-500'>{error}</p>} */}
				</div>

				<div className="form-control w-full max-w-xs">
					<label className="label">
						<span className="label-text">photo</span>
					</label>

					<input
						{...register("image", { required: "photo is required" })}
						type="file"
						placeholder="Type here"
						className="input input-bordered w-full max-w-xs"
					/>
					{errors.img && <p className="text-red-500">{errors.img?.message}</p>}
				</div>

				<input
					className="btn btn-accent w-full mb-4 mt-5"
					value="Add Product"
					type="submit"
				/>
			</form>
		</div>
    );
};

export default AddProduct;