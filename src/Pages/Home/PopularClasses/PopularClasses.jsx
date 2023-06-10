import React from "react";
import ClassesCard from "./ClassesCard";
import { Link } from "react-router-dom";
import Buttons from "../../../Components/Buttons/Buttons";

const PopularClasses = () => {
  return (
    <div className="mt-36 mb-36">
      <h2 className="text-center font-bold text-4xl">Popular Classes</h2>
      <hr className="border mt-2 w-80 mx-auto" />
      {/* class card */}
      <ClassesCard></ClassesCard>
      {/* button */}
      <div className="mt-14 text-center">
        <Link to="/classes">
          <Buttons title="Enroll Now"></Buttons>
        </Link>
      </div>
    </div>
  );
};

export default PopularClasses;
