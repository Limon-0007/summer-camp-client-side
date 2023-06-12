import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";

const Register = () => {
  const [error, setError] = useState("");
  const { createUser, updateUserProfile, googleSignIn } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const photoURL = form.photo.value;
    setError("");
    if (password !== confirmPassword) {
      return setError("Password did not matched");
    }
    if (password.length < 6) {
      return setError("Password should at least 6 characters long");
    }

    if (!/[A-Z]/.test(password)) {
      return setError("Password should contain at least one capital letter");
    }

    if (!/[!@#$%^&*]/.test(password)) {
      return setError("Password should contain at least one special character");
    }

    const newUser = {
      name,
      email,
      password,
      confirmPassword,
      photoURL,
      role: "student",
    };

    createUser(email, password)
      .then(() => {
        updateUserProfile(name, photoURL)
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "Sign up Successfully",
              showConfirmButton: false,
              timer: 1000,
            });
            navigate(from, { replace: true });
          })
          .catch((error) => {
            setError(error.message);
          });
      })
      .catch((error) => {
        setError(error.message);
      });

    // send data to server

    fetch("https://summer-camp-server-side-iota.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Logged in Successfully",
          showConfirmButton: false,
          timer: 1000,
        });
        navigate(from, { replace: true });
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row md:px-12 px-4">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6 md:pr-4">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 font-semibold">
          <form onSubmit={handleRegister} className="card-body">
            <div className="grid md:grid-cols-2 gap-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Username"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            {/* password */}
            <div className="grid md:grid-cols-2 gap-2">
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>

              {/*confirm password */}
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="confirm Password"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            {/* error */}
            <p className="text-red-600 ">
              <small>{error}</small>
            </p>
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
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
            {/* login */}
            <div>
              <p className="py-2">
                <small>
                  Already have an account? Please{" "}
                  <Link className="underline" to="/login">
                    Login
                  </Link>
                </small>
              </p>
            </div>
          </form>
          {/* divider */}
          <div className="divider">or</div>
          <div className="mx-auto pb-6">
            <button onClick={handleGoogleSignIn}>
              <FaGoogle className="text-2xl"></FaGoogle>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
