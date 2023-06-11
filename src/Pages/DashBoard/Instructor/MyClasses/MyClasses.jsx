import React from "react";
import Title from "../../../../Components/Title/Title";
import MyClassesCard from "./MyClassesCard";

const MyClasses = () => {
  return (
    <div>
      <div className="mb-10">
        <Title title="My Classes"></Title>
      </div>
      <MyClassesCard></MyClassesCard>
    </div>
  );
};

export default MyClasses;
