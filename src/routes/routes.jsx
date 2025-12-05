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
                element: <PrivateRoute><SuppliesDetails></SuppliesDetails></PrivateRoute>,
             },
             {
               path:'/forget/:email',
               element: <ForgetPass></ForgetPass>
             },
             {
               path:'/add-listing',
               element:<PrivateRoute><AddListing></AddListing></PrivateRoute>
             },
             {
               path:'/mylisting',
               element: <PrivateRoute><MyListing></MyListing></PrivateRoute>
             },
             {
               path:'/update-listing/:id',
               element:<PrivateRoute><UpdateListing></UpdateListing></PrivateRoute>
             },
             {
               path:'/myorders',
               element:<PrivateRoute><MyOrders></MyOrders></PrivateRoute>
             }
        ]
    }           
]    
) ;

export default router;

