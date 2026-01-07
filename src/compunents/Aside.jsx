import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Aside = () => {
    const { role, setUser } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(true);

    const handleLogout = () => {
        setUser(null);
        // Optional: firebase logout if needed
        // signOut(auth);
        window.location.href = "/login"; // redirect to login
    };

    return (
        <>
            {/* Mobile toggle button */}
            <button
                className="md:hidden fixed top-4 left-4 z-50 bg-blue-500 text-white p-2 rounded-md shadow-md"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? "Close Menu" : "Open Menu"}
            </button>

            {/* Sidebar */}
            <aside
                className={`
          fixed top-0 left-0 h-screen w-64 bg-gray-100 shadow-lg p-5
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:relative
        `}
            >
                <h2 className="text-2xl font-bold mb-6 text-blue-600">
                    {role === "admin" ? "Admin Dashboard" : "Customer Dashboard"}
                </h2>


                <ul className="flex flex-col gap-4 text-gray-700 font-medium">
                    {role === "admin" && (
                        <>  
                            <li>
                                <Link
                                    to="/dashboard/myProfile"
                                    className="hover:text-blue-500 transition"
                                > My Profile</Link>
                            </li>
                            <li>
                                <Link
                                    to="/dashboard/manage-services"
                                    className="hover:text-blue-500 transition"
                                >
                                    Manage Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/dashboard/manage-users"
                                    className="hover:text-blue-500 transition"
                                >
                                    Manage Users
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/dashboard/all-orders"
                                    className="hover:text-blue-500 transition"
                                >
                                    All Orders
                                </Link>
                            </li>
                        </>
                    )}
                    {role === "customer" && (
                        <>
                            <li>
                                <Link
                                    to="/dashboard/myProfile"
                                    className="hover:text-blue-500 transition"
                                > My Profile</Link>
                            </li>
                            <li>
                                <Link
                                    to={'/dashboard/mylisting'}
                                    className="hover:text-blue-500 transition"
                                >
                                    My Listings
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={'/dashboard/add-listing'}
                                    className="hover:text-blue-500 transition"
                                >
                                    Add Listing
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={'/dashboard/myorders'}
                                    className="hover:text-blue-500 transition"
                                >
                                    My Orders
                                </Link>
                            </li>
                        </>
                    )}
                </ul>

                {/* Logout Button */}
                <Link
                    to="/"
                    //   onClick={handleLogout}
                    className="btn mt-6 w-full bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600 transition"
                >Back</Link>
            </aside>
        </>
    );
};

export default Aside;
