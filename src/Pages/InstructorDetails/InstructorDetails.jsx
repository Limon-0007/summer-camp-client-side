import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import Swal from "sweetalert2";

const InstructorDetails = () => {
  const instructorData = useLoaderData();
  const { class_name, email, image, name, number_of_students } = instructorData;
  const handleFavorite = () => {
    //TODO: need to push data to localStorage
    Swal.fire({
      icon: "success",
      title: "Added to Favorite Successfully!",
      showConfirmButton: false,
      timer: 1200,
    });
  };
  return (
    <div className="py-28">
      <h2 className="text-center text-4xl font-semibold mb-14">{name}</h2>
      <div className="card w-80 mx-auto bg-base-100 shadow-xl">
        <div className="relative overflow-hidden">
          <div className="transition-transform duration-300 transform hover:scale-110 cursor-pointer">
            <img
              src={image}
              alt="image not found"
              className="h-48 w-full rounded"
            />
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div>
            <p className="font-bold">
              <small className="font-semibold">Class Name:</small> {class_name}
            </p>
            <p className="font-semibold text-sm">Email: {email}</p>
            <p className="font-semibold text-sm">
              Number of Students: {number_of_students}
            </p>
          </div>
          <div className="card-actions justify-end">
            <FaRegHeart
              onClick={handleFavorite}
              className="text-xl cursor-pointer"
            ></FaRegHeart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorDetails;
