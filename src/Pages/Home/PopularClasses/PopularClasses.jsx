import React from "react";
import ClassesCard from "./ClassesCard";
import { Link } from "react-router-dom";
import Buttons from "../../../Components/Buttons/Buttons";
import Title from "../../../Components/Title/Title";

const PopularClasses = () => {
  return (
    <div className="mt-36 mb-36">
      <Title title="Popular Classes"></Title>
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
