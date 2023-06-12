import React, { useEffect, useState } from "react";
import Title from "../../../../Components/Title/Title";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const token = localStorage.getItem("access-token");
  const {
    isLoading,
    isError,
    data: users = [],
    error,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        "https://summer-camp-server-side-iota.vercel.app/users",
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      return res.json();
    },
  });

  if (isLoading) {
    return <span className="loading loading-spinner"></span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  // make admin
  const handleMakeAdmin = (user) => {
    fetch(
      `https://summer-camp-server-side-iota.vercel.app/users/admin/${user._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            icon: "success",
            title: `${user?.name} is now an Admin`,
            showConfirmButton: false,
            timer: 1200,
          });
        }
      });
  };

  // make instructor
  const handleMakeInstructor = (user) => {
    fetch(
      `https://summer-camp-server-side-iota.vercel.app/users/instructor/${user._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            icon: "success",
            title: `${user?.name} is now an Instructor`,
            showConfirmButton: false,
            timer: 1200,
          });
        }
      });
  };

  return (
    <div>
      <div className="mb-10">
        <Title title="Manage Users"></Title>
      </div>
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
            {users?.map((user, index) => (
              <tr key={user._id}>
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-square w-12 h-12">
                        <img src={user?.photoURL} alt="Image not found" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.role}</td>
                <td></td>
                <td className="flex items-center gap-2">
                  <button
                    onClick={() => handleMakeAdmin(user)}
                    disabled={user?.role === "admin"}
                    className="bg-slate-600 py-1 xl:py-2 px-2 text-white rounded duration-200 hover:bg-slate-900 disabled:bg-slate-400"
                  >
                    Make Admin
                  </button>
                  <button
                    onClick={() => handleMakeInstructor(user)}
                    disabled={user?.role === "instructor"}
                    className="bg-slate-600 py-1 xl:py-2 px-2 text-white rounded duration-200 hover:bg-slate-900 disabled:bg-slate-400"
                  >
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
