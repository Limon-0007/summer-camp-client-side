import React from "react";
import Title from "../../../../Components/Title/Title";
import useCart from './../../../../Hooks/useCart/useCart';

const SelectedClasses = () => {
 const [cart] = useCart()
console.log(cart);
  return (
    <div>
      <div className="mb-10">
        <Title title="My Selected Classes"></Title>
      </div>
    </div>
  );
};

export default SelectedClasses;
