import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Title from "../../Components/Title/Title";
import axios from "axios";
import useCart from "../../Hooks/useCart/useCart";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [, refetch] = useCart();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(
      `https://summer-camp-server-side-iota.vercel.app/users/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [user]);

  useEffect(() => {
    fetch("https://summer-camp-server-side-iota.vercel.app/classes/approved")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  // enroll
  const handleEnroll = (singleClass) => {
    const {
      available_seats,
      class_name,
      image,
      instructor_name,
      num_students,
      price,
      status,
      _id,
    } = singleClass;

    if (!user) {
      Swal.fire({
        title: "Please Login!",
        text: "You need to login first to add to cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Log In",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { replace: true });
        }
      });
    } else {
      const newItem = {
        available_seats,
        class_name,
        email: user?.email,
        image,
        instructor_name,
        num_students,
        price,
        status,
        menuId: _id,
      };
      // post api
      axios
        .post(`https://summer-camp-server-side-iota.vercel.app/carts`, newItem)
        .then((res) => {
          if (res.data.insertedId) {
            refetch();
            Swal.fire({
              icon: "success",
              title: "Added to cart successfully!",
              showConfirmButton: false,
              timer: 1200,
            });
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  return (
    <div className="py-36 px-8">
      <Title title="Our Classes"></Title>
      {classes.map((singleClass) => (
        <div
          key={singleClass._id}
          className={`card md:card-side bg-base-100 shadow-xl my-3 ${
            singleClass.available_seats === 0 && "bg-red-600"
          }`}
        >
          <figure>
            <img
              src={singleClass.image}
              alt="image not found"
              className="md:w-48 md:h-52 w-full h-60 md:p-3 p-4"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{singleClass.class_name}</h2>
            <div className="font-semibold text-sm">
              <p>
                Instructor:{" "}
                <span className="text-base font-bold">
                  {singleClass.instructor_name}
                </span>
              </p>
              <p>Number of students: {singleClass.num_students}</p>
              <p>Available Seats: {singleClass.available_seats}</p>
              <p>Price: ${singleClass.price}</p>
              <div className="card-actions justify-end">
                <button
                  disabled={
                    singleClass.available_seats === 0 ||
                    users[0]?.role === "admin" ||
                    users[0]?.role === "instructor"
                  }
                  onClick={() => handleEnroll(singleClass)}
                  className="bg-slate-600 py-2 px-4 text-white rounded duration-200 hover:bg-slate-900"
                >
                  Select
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Classes;
