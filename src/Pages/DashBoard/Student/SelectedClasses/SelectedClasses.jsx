import React from "react";
import Title from "../../../../Components/Title/Title";
import SelectedClassesCard from "./SelectedClassesCard";

const SelectedClasses = () => {
  return (
    <div>
      <div className="mb-10">
        <Title title="My Selected Classes"></Title>
      </div>
      <SelectedClassesCard></SelectedClassesCard>
    </div>
  );
};

export default SelectedClasses;
