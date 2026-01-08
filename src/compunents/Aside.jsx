import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { MdDashboard, MdPerson, MdListAlt, MdAdd, MdManageAccounts, MdShoppingCart } from "react-icons/md";
import { RiUserSettingsFill } from "react-icons/ri";
import { MdMenu } from "react-icons/md";
import { FaStepBackward } from "react-icons/fa";


const Aside = () => {
  const { role, setUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false); // start closed for mobile


  const linkClasses = ({ isActive }) =>
    `flex items-center gap-2 p-2 rounded-md transition ${
      isActive ? "bg-blue-100 text-blue-600 font-semibold" : "text-gray-700 hover:bg-gray-100"
    }`;

  return (
    <>
      {/* Mobile toggle button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-blue-500 text-white p-2 rounded-md shadow-md hover:bg-blue-600 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <MdMenu /> : <MdMenu />}
      </button>

      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0  bg-opacity-30 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen w-64 bg-white shadow-lg p-6 z-50
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:relative
        `}
      >
        {/* Dashboard Title */}
        <div className="flex items-center gap-2 mb-8">
          <MdDashboard className="text-2xl text-blue-500" />
          <Link to={'/dashboard'}>
          <h2 className="text-2xl font-bold text-blue-600">
            {role === "admin" ? "Admin Dashboard" : "Customer Dashboard"}
          </h2>
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col gap-2 text-gray-700 font-medium">
          {role === "admin" && (
            <>
              <li>
                <NavLink to="/dashboard/myProfile" onClick={() => setIsOpen(false)} className={linkClasses}>
                  <MdPerson /> My Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage-services" onClick={() => setIsOpen(false)} className={linkClasses}>
                  <MdManageAccounts /> Manage Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage-users" onClick={() => setIsOpen(false)} className={linkClasses}>
                  <RiUserSettingsFill /> Manage Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/all-orders" onClick={() => setIsOpen(false)} className={linkClasses}>
                  <MdShoppingCart /> All Orders
                </NavLink>
              </li>
            </>
          )}

          {role === "customer" && (
            <>
              <li>
                <NavLink to="/dashboard/myProfile" onClick={() => setIsOpen(false)} className={linkClasses}>
                  <MdPerson /> My Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/mylisting" onClick={() => setIsOpen(false)} className={linkClasses}>
                  <MdListAlt /> My Listings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/add-listing" onClick={() => setIsOpen(false)} className={linkClasses}>
                  <MdAdd /> Add Listing
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myorders" onClick={() => setIsOpen(false)} className={linkClasses}>
                  <MdShoppingCart /> My Orders
                </NavLink>
              </li>
            </>
          )}
        </ul>
        <Link
          to={'/'}
          className="mt-8 w-full flex items-center justify-center gap-2 bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600 transition"
        ><FaStepBackward /> Back to Home
        </Link>
      </aside>
    </>
  );
};

export default Aside;
