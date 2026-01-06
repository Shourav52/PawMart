import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Aside = () => {
  const { role } = useContext(AuthContext);

  return (
    <aside className="w-64 bg-gray-100 h-screen p-5">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <ul className="flex flex-col gap-2">
        {role === "admin" && (
          <>
            <li><Link to="/dashboard/admin/services">Manage Services</Link></li>
            <li><Link to="/dashboard/admin/orders">All Orders</Link></li>
          </>
        )}
        {role === "customer" && (
          <>
            <li><Link to="/dashboard/customer/orders">My Orders</Link></li>
            <li><Link to="/dashboard/customer/profile">My Profile</Link></li>
          </>
        )}
      </ul>
    </aside>
  );
};

export default Aside;
