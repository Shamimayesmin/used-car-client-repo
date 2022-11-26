import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import AllBuyers from "../../Pages/DashboardMenu/AdminMenu/AllBuyers";
import AllSellers from "../../Pages/DashboardMenu/AdminMenu/AllSellers";
import MyOrder from "../../Pages/DashboardMenu/MyOrder/MyOrder";
import AddProduct from "../../Pages/DashboardMenu/SellerMenu/AddProduct";
import MyProduct from "../../Pages/DashboardMenu/SellerMenu/MyProduct";
import Category from "../../Pages/Home/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Payment from "../../Pages/Payment/Payment";
import Products from "../../Pages/Products/Products";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import SignUp from "../../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/signup',
                element : <SignUp></SignUp>,
                loader: () =>
					fetch(
						'http://localhost:5000/brands'
					)

            },
            {
                path : '/blog',
                element : <Blog></Blog>
            },
            
            {
                path : '/category/:id',
                element : <Products></Products> ,
                loader: ({ params }) =>
					fetch(
						`http://localhost:5000/brands/${params.id}`
					),
            },
            {
                path : '/brands',
                element : <Products></Products>,
                loader: () =>
					fetch(
						'http://localhost:5000/brands'
					),
            },
            
        ]
    },

    {
        path: "/dashboard",
        element : <DashboardLayout></DashboardLayout>,
        children : [
            {
				path: "/dashboard/my-orders",
				element: <MyOrder></MyOrder> 
				
			},
            {
				path: "/dashboard/addproduct",
				element : <AddProduct></AddProduct>
				
			},
            {
				path: "/dashboard/myproduct",
				element : <MyProduct></MyProduct>
				
			},
            {
				path: '/dashboard/allseller',
				element : <AllSellers></AllSellers>
             
			},
            {
				path: '/dashboard/allbuyer',
				element : <AllBuyers></AllBuyers>
             
			},
            {
				path: "/dashboard/payment/:id",
				element: <Payment></Payment>,
				loader: ({ params }) =>
					fetch(
						`http://localhost:5000/bookings/${params.id}`
					),
			},
        ]
    }
])

export default router ;