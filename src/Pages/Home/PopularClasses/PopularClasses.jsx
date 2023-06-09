import React from "react";
import ClassesCard from "./ClassesCard";

const PopularClasses = () => {
 

  return (
    <div className="mt-36 mb-36">
      <h2 className="text-center font-bold text-4xl">Popular Classes</h2>
      <hr className="border mt-2 w-80 mx-auto" />
      {/* class card */}
      <ClassesCard></ClassesCard>
    </div>
  );
};

export default PopularClasses;
