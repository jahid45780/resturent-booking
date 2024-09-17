import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/main/Main";
import Food from "../pages/main/Food";
import Foods from "../pages/main/Foods";
import Home from "../pages/main/Home";
import TermsAndConditions from "../pages/main/TermsAndConditions";
import NotFound from "../pages/NotFound";
import Dashboard from "../layouts/dashboard/Dashboard";
import DashboardHome from "../pages/dashboard/DashboardHome";
import AddMenu from "../pages/dashboard/AddMenu";
import Earning from "../pages/dashboard/Earning";
import OrderDetails from "../pages/dashboard/OrderDetails";
import SignUp from "../pages/auth/SignUp";
import ForgetPassword from "../pages/auth/ForgetPassword";
import OtpVerify from "../pages/auth/OtpVerify";
import ResetPassword from "../pages/auth/ResetPassword";
import Auth from "../layouts/auth/Auth";
import Login from "../pages/auth/Login";
import BookTable from "../pages/main/BookTable";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/foods',
                element: <Foods />
            },
            {
                path: '/bookTable',
                element: <BookTable/>
            },
            {
                path: '/foods/:id',
                element: <Food />,
                loader:()=>fetch('/food.json')
            },
            {
                path: 'terms-and-conditions',
                element: <TermsAndConditions />
            }
        ]
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            {
                path: "dashboard",
                element: <DashboardHome />
            },
            {
                path: "add-menu",
                element: <AddMenu />
            },
            {
                path: "earning",
                element: <Earning />
            },
            {
                path: "order-details",
                element: <OrderDetails />
            }
    ]
    },
    {
        path: "/auth",
        element: <Auth />,
        children: [ 
            {
                path: "login",
                element: <Login />
            },
            {
                path: "sign-up",
                element: <SignUp />
            },
            {
                path: "forget-password",
                element: <ForgetPassword />
            },
            {
                path: "otp-verify",
                element: <OtpVerify />
            },
            {
                path: "reset-password",
                element: <ResetPassword />
            }
    ]
    },
    {
        path: "*",
        element: <NotFound />
    }
]);

export default router;