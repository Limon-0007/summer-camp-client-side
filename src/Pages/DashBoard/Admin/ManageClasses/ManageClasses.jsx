import React, { useEffect, useState } from "react";
import Title from "../../../../Components/Title/Title";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

const ManageClasses = () => {
  const token = localStorage.getItem("access-token");
  const {
    isLoading,
    isError,
    data: classes = [],
    error,
    refetch,
  } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await fetch(
        "https://summer-camp-server-side-iota.vercel.app/classes",
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

  //   approve
  const handleApproved = (singleClass) => {
    fetch(
      `https://summer-camp-server-side-iota.vercel.app/classes/approved/${singleClass._id}`,
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
            title: `${singleClass?.class_name} is now Approved`,
            showConfirmButton: false,
            timer: 1200,
          });
        }
      });
  };

  //   declined
  const handleDeclined = (singleClass) => {
    fetch(
      `https://summer-camp-server-side-iota.vercel.app/classes/declined/${singleClass._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            icon: "warning",
            title: `${singleClass?.class_name} is Declined!`,
            showConfirmButton: false,
            timer: 1200,
          });
        }
      });
  };

  return (
    <div>
      <div className="mb-10">
        <Title title="Manage Classes"></Title>
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
              <th>Instructor</th>
              <th>Class Name</th>
              <th>Status</th>
              <th></th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {classes?.map((singleClass, index) => (
              <tr key={singleClass._id}>
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-square w-12 h-12">
                        <img src={singleClass?.image} alt="Image not found" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{singleClass?.instructor_name}</td>
                <td>{singleClass?.class_name}</td>
                <td>{singleClass?.status}</td>
                <td></td>
                <td className="flex items-center gap-2">
                  <button
                    onClick={() => handleApproved(singleClass)}
                    disabled={singleClass?.status === "approved" || singleClass?.status === "declined"}
                    className="bg-slate-600 p-2 text-white rounded duration-200 hover:bg-slate-900 disabled:bg-slate-400"
                  >
                    Approve
                  </button>
                  {/* declined */}
                  <button
                    onClick={() => handleDeclined(singleClass)}
                    disabled={singleClass?.status === "approved" || singleClass?.status === "declined"}
                    className="bg-slate-600 p-2 text-white rounded duration-200 hover:bg-slate-900 disabled:bg-slate-400"
                  >
                    Decline
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

export default ManageClasses;
