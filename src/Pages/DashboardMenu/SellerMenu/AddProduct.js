import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Loading from '../../../components/Spinner/Loading';
import DatePicker from 'react-datepicker'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { CalendarIcon } from '@heroicons/react/20/solid'

// import DatePicker from 'react-datepicker'

const AddProduct = () => {
    const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	// const [startDate,setStartDate] = useState(new Date())

    const navigate = useNavigate();
    const { data: addproducts, isLoading } = useQuery({
		queryKey: ["addprocuct"],
		queryFn: async () => {
			const res = await fetch(
				"http://localhost:5000/productName"
			);
			const data = await res.json();
			return data;
		},
	});

    const imagehostkey = process.env.REACT_APP_IMGBB_KEY;
    const handleAddProduct = (data) =>{
        console.log(data);


        const image = data.image[0];
		const formData = new FormData();
		formData.append("image", image);
		const url = `https://api.imgbb.com/1/upload?key=${imagehostkey}`;
		console.log(url);
		fetch(url, {
			method: "POST",
			body: formData,
		})
        .then((res) => res.json())
			.then((imgData) => {
				if (imgData.success) {
					console.log(imgData.data.url);
					const product = {
						name: data.name,
						email: data.email,
                        location : data.location,
                        date : data.date,
                        price : data.price,
						product: data.addproduct,
						image: imgData.data.url,
					};

                    console.log(product);
					// save doctor information to the database
					fetch("http://localhost:5000/products", {
						method: "POST",
						headers: {
							"content-type": "application/json",
							authorization: `bearer ${localStorage.getItem("usedcarToken")}`,
						},
						body: JSON.stringify(product),
					})
						.then((res) => res.json())
						.then((result) => {
							console.log(result);
							toast.success(`${data.name} is added successfully`);
							navigate("/dashboard/myproduct");
						});
				}
			});
		
    }

    if (isLoading) {
		return <Loading></Loading>;
	}
    return (
        <div className="w-96 mx-auto rounded-lg p-7 shadow-2xl m-20">
			<h2 className="text-3xl">Add A Doctor</h2>
			<form onSubmit={handleSubmit(handleAddProduct)}>
				<div className="form-control w-full max-w-xs">
					<label className="label">
						<span className="label-text">Product Name</span>
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
						<span className="label-text">price</span>
					</label>

					<input
						{...register("price", { required: "price is required" })}
						type="text"
						
						placeholder="Type here"
						className="input input-bordered w-full max-w-xs"
					/>
					
				</div>

				{/* <div className='shadow-md rounded-md my-2 p-3 flex justify-between items-center'>
                <div>
                  <p className='block text-sm text-gray-500'>To</p>
                  <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>

                <CalendarIcon className='h5 w-5' />
              </div> */}
				<div className="form-control w-full max-w-xs">
					<label className="label">
						<span className="label-text">location</span>
					</label>

					<input
						{...register("location", { required: "location is required" })}
						type="text"
						placeholder="Type here"
						className="input input-bordered w-full max-w-xs"
					/>
					
				</div>
				<div className="form-control w-full max-w-xs">
					<label className="label">
						<span className="label-text">Date</span>
					</label>

					<input
						{...register("date", { required: "date is required" })}
						type="text"
						placeholder="Type here"
						className="input input-bordered w-full max-w-xs"
					/>
					
				</div>
				<div className="form-control w-full max-w-xs">
					<label className="label">
						<span className="label-text">Add product</span>
					</label>
					<select
						{...register("addproduct")}
						className="select select-bordered w-full max-w-xs"
					>
						{addproducts.map((product) => (
							<option key={product._id} value={product.brand}>
								{product.brand}
							</option>
						))}
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