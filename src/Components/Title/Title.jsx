import React from "react";

const Title = ({title}) => {
  return (
    <div>
      <h2 className="text-center font-bold text-4xl">{title}</h2>
      <hr className="border mt-2 w-80 mx-auto" />
    </div>
  );
};

export default Title;
