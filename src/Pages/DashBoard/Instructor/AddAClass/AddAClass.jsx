import React from "react";
import ClassCard from "./ClassCard";
import Title from "../../../../Components/Title/Title";

const AddAClass = () => {
  return (
    <div>
      <div className="mb-6">
        <Title title="Add a Class" />
      </div>
      <ClassCard></ClassCard>
    </div>
  );
};

export default AddAClass;
