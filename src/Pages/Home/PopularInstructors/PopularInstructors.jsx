import React from "react";
import InstructorsCard from "./InstructorsCard";
import { Link } from "react-router-dom";
import Buttons from './../../../Components/Buttons/Buttons';

const PopularInstructors = () => {
  return (
    <div className="mb-36">
      <h2 className="text-center font-bold text-4xl">Popular Instructors</h2>
      <hr className="border mt-2 w-96 mx-auto" />
      {/* instructors card */}
      <InstructorsCard></InstructorsCard>
      {/* button */}
      <div className="mt-14 text-center">
      <Link to="/">
        <Buttons title="Show All"></Buttons>
      </Link>
      </div>
    </div>
  );
};

export default PopularInstructors;
