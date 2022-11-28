import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import AllBuyers from "../../Pages/DashboardMenu/AdminMenu/AllBuyers";
import AllSellers from "../../Pages/DashboardMenu/AdminMenu/AllSellers";
import MyOrder from "../../Pages/DashboardMenu/MyOrder/MyOrder";
import AddProduct from "../../Pages/DashboardMenu/SellerMenu/AddProduct";
import Advertise from "../../Pages/DashboardMenu/SellerMenu/Advertise";
import MyProduct from "../../Pages/DashboardMenu/SellerMenu/MyProduct";
import Category from "../../Pages/Home/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Payment from "../../Pages/Payment/Payment";
import Products from "../../Pages/Products/Products";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "/signup",
				element: <SignUp></SignUp>,
				loader: () => fetch(" https://used-car-server.vercel.app/brands"),
			},
			{
				path: "/blog",
				element: <Blog></Blog>,
			},

			{
				path: "/category/:id",
				element: <Products></Products>,
				loader: ({ params }) =>
					fetch(` https://used-car-server.vercel.app/brands/${params.id}`),
			},
			{
				path: "/brands",
				element: <Products></Products>,
				loader: () => fetch(" https://used-car-server.vercel.app/brands"),
			},
		],
	},

	{
		path: "/dashboard",
		// element : <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
		element: <DashboardLayout></DashboardLayout>,
		children: [
			{
				path: "/dashboard/my-orders",
				element: <MyOrder></MyOrder>,
			},
			{
				path: "/dashboard/addproduct",
				element: (
					<SellerRoute>
						<AddProduct></AddProduct>
					</SellerRoute>
				),
			},
			{
				path: "/dashboard/myproduct",
				element: (
					<SellerRoute>
						<MyProduct></MyProduct>
					</SellerRoute>
				),
			},
			{
				path: "/dashboard/allseller",
				element : <AdminRoute><AllSellers></AllSellers></AdminRoute>
				// element: <AllSellers></AllSellers>,
			},
			{
				path: "/dashboard/allbuyer",
				element : <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
				// element: <AllBuyers></AllBuyers>,
			},
			{
				path: "/dashboard/advertise/:id",
				element: <Advertise></Advertise>,
				loader: ({ params }) =>
					fetch(` https://used-car-server.vercel.app/brands/${params.id}`),
			},
			{
				path: "/dashboard/payment/:id",
				element: <Payment></Payment>,
				loader: ({ params }) =>
					fetch(` https://used-car-server.vercel.app/bookings/${params.id}`),
			},
		],
	},
]);

export default router;
