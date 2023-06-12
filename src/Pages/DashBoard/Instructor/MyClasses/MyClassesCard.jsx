import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Providers/AuthProviders";

const MyClassesCard = () => {
  const [classes, setClasses] = useState([]);
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem("access-token");

  useEffect(() => {
    fetch(
      `https://summer-camp-server-side-iota.vercel.app/classes/${user?.email}`,
      {
        headers: {
          authorization: `bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, [user, token]);
  return (
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
            <th>Class Name</th>
            <th>Price</th>
            <th>Available Seats</th>
            <th>Number of Students</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {classes?.map((user, index) => (
            <tr key={user._id}>
              <th>
                <label>{index + 1}</label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-square w-12 h-12">
                      <img src={user?.image} alt="Image not found" />
                    </div>
                  </div>
                </div>
              </td>
              <td>{user?.instructor_name}</td>
              <td>{user?.class_name}</td>
              <td>${user?.price}</td>
              <td>{user?.available_seats}</td>
              <td>{user?.num_students}</td>
              <td>{user?.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyClassesCard;
