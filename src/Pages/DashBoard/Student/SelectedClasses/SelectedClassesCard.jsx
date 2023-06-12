import React from "react";
import useCart from "../../../../Hooks/useCart/useCart";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const SelectedClassesCard = () => {
  const [cart, refetch] = useCart();
  const price = cart?.reduce((item, sum) => item + sum.price, 0);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://summer-camp-server-side-iota.vercel.app/carts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
                refetch();
                Swal.fire({
                    icon: 'success',
                    title: 'Deleted from cart successfully!',
                    showConfirmButton: false,
                    timer: 1200
                  })
              }
          })
      }
    });
  };
  return (
    <div>
      <div className="flex justify-between mb-4 font-semibold text-base items-center">
        <h2>Total Price: ${price}</h2>
        <h2>Total Items: {cart.length}</h2>
        <Link>
          <button className="p-2 bg-slate-600 text-white rounded hover:bg-slate-900 duration-200">
            Pay Now
          </button>
        </Link>
      </div>
      <hr className="border mb-10" />
      <div className="overflow-x-auto">
        <table className="table font-semibold text-xs">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>#</label>
              </th>
              <th></th>
              <th>Name</th>
              <th>Class Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart?.map((user, index) => (
              <tr key={user._id}>
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-square w-12 h-12">
                        <img src={user?.image} alt="Image not found" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{user?.instructor_name}</td>
                <td>{user?.class_name}</td>
                <td>${user?.price}</td>
                <td>
                  <button onClick={() => handleDelete(user?._id)}>
                    <FaTrashAlt className="text-xl"></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedClassesCard;
