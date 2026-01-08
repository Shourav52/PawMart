import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import CustomerHome from './CustomerHome';
import AdminHome from './AdminHome';



const DashboardHome = () => {
  const { role } = useContext(AuthContext); // get role from AuthContext

  return (
    <div className="p-6">
      {role === 'admin' && <AdminHome></AdminHome>}
      {role === 'customer' && <CustomerHome />}
      {!role && <p className="text-gray-500">Loading...</p>}
    </div>
  );
};

export default DashboardHome;
