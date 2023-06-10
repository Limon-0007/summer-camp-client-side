import React, { useEffect, useState } from "react";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
//   TODO: actions for buttons 
  return (
    <div>
      <h2 className="text-center font-bold text-4xl">Popular Classes</h2>
      <hr className="border mt-2 w-80 mx-auto mb-10" />
      {/* table */}
      <div className="overflow-x-auto">
        <table className="table font-semibold text-xs">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>#</label>
              </th>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th></th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-square w-12 h-12">
                        <img
                          src={user?.photoURL}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.role}</td>
                <td></td>
                <td className="flex items-center gap-2">
                  <button className="bg-slate-600 py-1 xl:py-2 px-2 text-white rounded duration-200 hover:bg-slate-900">
                    Make Admin
                  </button>
                  <button className="bg-slate-600 py-1 xl:py-2 px-2 text-white rounded duration-200 hover:bg-slate-900">
                    Make Instructor
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
