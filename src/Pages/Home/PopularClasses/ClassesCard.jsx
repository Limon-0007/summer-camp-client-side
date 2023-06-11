import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ClassesCard = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("https://summer-camp-server-side-murex.vercel.app/classes/approved")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, []);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 px-6 mt-14">
      {classes.slice(0, 6).map((singleClass) => (
        <div key={singleClass._id} className="card bg-base-100 shadow-xl">
          <div className="relative overflow-hidden">
            <div className="transition-transform duration-300 transform hover:scale-110 cursor-pointer">
              <img
                src={singleClass.image}
                alt="image not found"
                className="h-48 w-full rounded"
              />
              <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white text-center">
                <Link
                  to="/classes"
                  className="bg-white text-black py-2 px-4 rounded font-semibold"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
          <div className="card-body">
            <h2 className="card-title">{singleClass.class_name}</h2>
            <div>
              <p className="font-semibold text-sm">
                Number of Students: {singleClass.num_students}
              </p>
              <p className="font-semibold text-sm">
                Price: ${singleClass.price}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClassesCard;
