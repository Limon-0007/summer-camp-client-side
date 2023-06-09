import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Buttons from "../../../Components/Buttons/Buttons";

const InstructorsCard = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/instructors")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 px-6 mt-14">
      {instructors.slice(0, 6).map((instructor) => (
        <div key={instructor._id} className="card bg-base-100 shadow-xl">
          <div className="relative overflow-hidden">
            <div className="transition-transform duration-300 transform hover:scale-110 cursor-pointer">
              <img
                src={instructor.image}
                alt="image not found"
                className="h-56 w-full rounded"
              />
              <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white text-center">
                <Link
                  to={`/instructors/${instructor._id}`}
                  className="bg-white text-black py-2 px-4 rounded font-semibold"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
          <div className="card-body">
            <h2 className="card-title">{instructor.name}</h2>
            <div>
              <p className="font-semibold text-sm">
                Class Name: {instructor.class_name}
              </p>
              <p className="font-semibold text-sm">
                Number of Students: {instructor.number_of_students}
              </p>
            </div>
            <div className="card-actions justify-end">
              <Link to={`/instructors/${instructor._id}`}>
                <Buttons title="View Details"></Buttons>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InstructorsCard;
