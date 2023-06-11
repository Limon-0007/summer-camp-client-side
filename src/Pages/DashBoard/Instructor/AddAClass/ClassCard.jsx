import React, { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProviders";
import axios from "axios";
import Swal from "sweetalert2";

const ClassCard = () => {
  const { user } = useContext(AuthContext);

  const handleAddClass = (event) => {
    event.preventDefault();
    const form = event.target;
    const class_name = form.class_name.value;
    const instructor_name = form.instructor_name.value;
    const email = form.email.value;
    const num_students_str = form.num_students.value;
    const num_students = parseInt(num_students_str);
    const availableSeatsSTR = form.available_seats.value;
    const available_seats = parseInt(availableSeatsSTR);
    const priceSTR = form.price.value;
    const price = parseFloat(priceSTR);
    const image = form.image.value;
    const newClass = {
      class_name,
      instructor_name,
      email,
      num_students,
      available_seats,
      price,
      image,
      status: "pending",
    };

    axios
      .post(
        "https://summer-camp-server-side-murex.vercel.app/classes",
        newClass
      )
      .then((response) => {
        if (response.data.insertedId) {
          form.reset();
          Swal.fire({
            icon: "success",
            title: "Class added successfully!",
            showConfirmButton: false,
            timer: 1200,
          });
        }
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row md:px-12 px-4">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 font-semibold text-xs">
          <form onSubmit={handleAddClass} className="card-body">
            <div className="grid md:grid-cols-2 gap-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Class Name</span>
                </label>
                <input
                  type="text"
                  name="class_name"
                  placeholder="Class Name"
                  className="input input-bordered text-sm"
                  required
                />
              </div>
              {/* instructor name */}
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Instructor Name</span>
                </label>
                <input
                  type="text"
                  name="instructor_name"
                  defaultValue={user?.displayName}
                  className="input input-bordered text-sm"
                  required
                />
              </div>
            </div>
            {/* email & number of students*/}
            <div className="grid md:grid-cols-2 gap-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  className="input input-bordered text-sm"
                  required
                />
              </div>
              {/* number of students */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Number of Students</span>
                </label>
                <input
                  type="text"
                  name="num_students"
                  placeholder="Number of students"
                  className="input input-bordered text-sm"
                  required
                />
              </div>
            </div>

            {/* price & available seat */}
            <div className="grid md:grid-cols-2 gap-2">
              {/*Available seat */}
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Available Seats</span>
                </label>
                <input
                  type="number"
                  name="available_seats"
                  placeholder="Available Seats"
                  className="input input-bordered text-sm"
                  required
                />
              </div>
              {/*price */}
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  className="input input-bordered text-sm"
                  required
                />
              </div>
            </div>
            {/* photo URL */}
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="URL"
                name="image"
                placeholder="Photo URL"
                className="input input-bordered text-sm"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-outline">
                Add class
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
