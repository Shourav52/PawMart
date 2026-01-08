import { createBrowserRouter} from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import MyProfile from "../pages/MyProfile";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PrivateRoute from "./PrivateRoute";
import ForgetPass from "../pages/ForgetPass";
import Error from "../pages/Error";
import MyOrders from "../pages/MyOrders";
import PetsSupplies from "../pages/PetsSupplies";
import MyListing from "../pages/MyListing";
import UpdateListing from "../pages/UpdateListing";
import SuppliesDetails from "../pages/SuppliesDetails";
import AddListing from "../pages/AddListing";
import DeshboardLayout from "../layout/DeshboardLayout";
import DeshboardHome from "../pages/DeshboardHome";
import ManageServices from "../pages/ManageServices";
import ManageUsers from "../pages/ManageUsers";
import AllOrder from "../pages/AllOrder";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import Support from "../pages/Support";
import Privacy from "../pages/Privacy";


export    const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement:<Error></Error>,
        children: [
            {
               index: true, 
               element: <Home/>,
            
             },
             {
                path:"/petsSupplies",
                element: <PetsSupplies />,
             },
             {
                path:"/myProfile",
                element: <PrivateRoute><MyProfile /></PrivateRoute>,
             },
             {
                path:"/login",
                element: <Login />,
             },
             {
                path:"/signup",
                element: <Signup />,
             },
             {
                path:"/details/:id",
                element:<SuppliesDetails></SuppliesDetails>,
             },
             {
               path:'/forget/:email',
               element: <ForgetPass></ForgetPass>
             },
             {
               path:'/contact',
               element: <Contact></Contact>
             },
             {
               path:'/blog',
               element: <Blog></Blog>
             },
             {
               path:'/support',
               element: <Support></Support>
             },
             {
               path:'/privacy',
               element: <Privacy></Privacy>
             },
        ]
    },
    {
        path: "/",
        element: <PrivateRoute><DeshboardLayout />
        </PrivateRoute>,
        errorElement: <Error />,
        children: [
            {
                path: "/dashboard",
                element: <DeshboardHome />,
            },
            {
                path: "/dashboard/myProfile",
                element: <MyProfile />,
            },
          
            {
               path: '/dashboard/mylisting',
               element: <MyListing />
            },
            {
               path: '/dashboard/add-listing',
               element: <AddListing></AddListing>
            },
            {
               path: '/dashboard/update-listing/:id',
               element: <UpdateListing />
            },
            {
               path: '/dashboard/myorders',
               element: <MyOrders />
            },
            {
               path: '/dashboard/manage-services',
               element: <ManageServices />
            },
            {
               path: '/dashboard/manage-users',
               element: <ManageUsers></ManageUsers>
            },
            {
               path: '/dashboard/all-orders',
               element: <AllOrder></AllOrder>
            },
        ]
    }            
]    
) ;

export default router;

