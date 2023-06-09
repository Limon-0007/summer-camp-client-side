import React, { useEffect, useState } from "react";
import Buttons from "../../Components/Buttons/Buttons";
import { Link } from "react-router-dom";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/instructors")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  return (
    <div className="py-36 px-8">
      <h2 className="text-center font-bold text-4xl">Our Instructors</h2>
      <hr className="border mt-2 w-96 mx-auto mb-20" />
      {instructors.map((instructor) => (
        <div
          key={instructor._id}
          className="card md:card-side bg-base-100 shadow-xl my-3"
        >
          <figure>
            <img
              src={instructor.image}
              alt="image not found"
              className="md:w-40 md:h-40 w-full h-60 md:p-3 p-4"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{instructor.name}</h2>
            <div className="font-semibold text-sm">
              <p>Email: {instructor.email}</p>
              <p>
                Class Name:{" "}
                <span className="font-bold text-base">
                  {instructor.class_name}
                </span>
              </p>
              <p>Number of students: {instructor.number_of_students}</p>
            </div>
            <div className="card-actions justify-end">
              {/* TODO: button to show classes by this Instructor. This will take you to a new link */}
              <Link>
                <Buttons title="See Classes"></Buttons>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Instructors;
