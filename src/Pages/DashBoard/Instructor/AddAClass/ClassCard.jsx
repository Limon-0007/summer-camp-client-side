import React, { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProviders";

const ClassCard = () => {
  const { user } = useContext(AuthContext);

  const handleAddClass = (event) => {
    event.preventDefault();
    const form = event.target;
    const className = form.className.value;
    const instructorName = form.instructorName.value;
    const email = form.email.value;
    const availableSeatsSTR = form.seats.value;
    const availableSeats = parseInt(availableSeatsSTR);
    const priceSTR = form.price.value;
    const price = parseFloat(priceSTR);
    const photoURL = form.photo.value;
    const newClass = {
      className,
      instructorName,
      email,
      availableSeats,
      price,
      photoURL,
      status: "pending",
    };
    console.log(newClass);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row md:px-12 px-4">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 font-semibold">
          <form onSubmit={handleAddClass} className="card-body">
            <div className="grid md:grid-cols-2 gap-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Class Name</span>
                </label>
                <input
                  type="text"
                  name="className"
                  placeholder="Class Name"
                  className="input input-bordered"
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
                  name="instructorName"
                  defaultValue={user?.displayName}
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            {/* email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                className="input input-bordered"
                required
              />
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
                  name="seats"
                  placeholder="Available Seats"
                  className="input input-bordered"
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
                  className="input input-bordered"
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
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-outline">
                Add class
              </button>
            </div>
            {/* login */}
            <div>
              <p className="py-2"></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
