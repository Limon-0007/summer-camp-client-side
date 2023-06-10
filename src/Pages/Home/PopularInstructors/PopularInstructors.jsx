import React from "react";
import InstructorsCard from "./InstructorsCard";
import { Link } from "react-router-dom";
import Buttons from './../../../Components/Buttons/Buttons';
import Title from "../../../Components/Title/Title";

const PopularInstructors = () => {
  return (
    <div className="mb-36">
    <Title title="Popular Instructors"></Title>
      {/* instructors card */}
      <InstructorsCard></InstructorsCard>
      {/* button */}
      <div className="mt-14 text-center">
      <Link to="/instructors">
        <Buttons title="Show All"></Buttons>
      </Link>
      </div>
    </div>
  );
};

export default PopularInstructors;
