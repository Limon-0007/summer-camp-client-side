import React, { useContext, useEffect, useState } from "react";
import Buttons from "../../Components/Buttons/Buttons";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Title from "../../Components/Title/Title";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // TODO: make admin and instructor dynamic
  const admin = false;
  const instructor = false;

  useEffect(() => {
    fetch("https://summer-camp-server-side-murex.vercel.app/classes")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  const handleEnroll = () => {
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
          navigate("/login");
        }
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
                    singleClass.available_seats === 0 || admin || instructor
                  }
                  onClick={handleEnroll}
                >
                  <Buttons title="Select"></Buttons>
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
