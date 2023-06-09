import React from "react";
import { Link } from "react-router-dom";

const Card = ({ image, date, text }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="relative overflow-hidden">
        <div className="transition-transform duration-300 transform hover:scale-110 cursor-pointer">
          <img
            src={image}
            alt="image not found"
            className="h-48 w-full rounded"
          />
          <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white text-center">
            <Link
              to="/"
              className="bg-white text-black py-2 px-4 rounded font-semibold"
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title text-green-700">{date}</h2>
        <hr className="w-28 border" />
        <p className="font-semibold">{text}</p>
      </div>
    </div>
  );
};

export default Card;
