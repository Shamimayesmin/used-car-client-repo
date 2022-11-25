import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Category from "../../Pages/Home/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
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
                element : <SignUp></SignUp>
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
            
        ]
    }
])

export default router ;