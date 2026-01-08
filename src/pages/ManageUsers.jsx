import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This user will be permanently deleted",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      confirmButtonText: "Yes, delete"
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/users/${id}`, {
          method: "DELETE",
        })
          .then(res => res.json())
          .then(() => {
            setUsers(users.filter(user => user._id !== id));
            Swal.fire("Deleted!", "User has been removed.", "success");
          });
      }
    });
  };

  if (loading) {
    return <div className="text-center mt-10">Loading users...</div>;
  }

  return (
    <div className="p-4 md:p-6">
      <h2 className="text-2xl text-center font-bold mb-6 text-blue-600">
        Manage Users
      </h2>

      {/* ✅ Desktop Table */}
      <div className="hidden md:block overflow-x-auto bg-white rounded-xl shadow">
        <table className="table w-full">
          <thead className="bg-gray-100">
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id}>
                <td className="flex items-center gap-3">
                  <img
                    src={user.photoURL || "https://i.ibb.co/2kR2z7N/user.png"}
                    alt="user"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span className="font-medium">{user.name || "Unknown"}</span>
                </td>
                <td>{user.email}</td>
                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold
                      ${user.role === "admin"
                        ? "bg-red-100 text-red-600"
                        : "bg-green-100 text-green-600"}
                    `}
                  >
                    {user.role}
                  </span>
                </td>
                <td className="text-center">
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-sm btn-error"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ Mobile Cards */}
      <div className="md:hidden grid gap-4">
        {users.map(user => (
          <div
            key={user._id}
            className="bg-white rounded-xl shadow p-4 flex items-center gap-4"
          >
            <img
              src={user.photoURL || "https://i.ibb.co/2kR2z7N/user.png"}
              alt="user"
              className="w-12 h-12 rounded-full object-cover"
            />

            <div className="flex-1">
              <p className="font-semibold">{user.name || "Unknown"}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
              <span
                className={`inline-block mt-1 px-3 py-1 rounded-full text-xs font-semibold
                  ${user.role === "admin"
                    ? "bg-red-100 text-red-600"
                    : "bg-green-100 text-green-600"}
                `}
              >
                {user.role}
              </span>
            </div>

            <button
              onClick={() => handleDelete(user._id)}
              className="btn btn-xs btn-error"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageUsers;
