import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import Swal from "sweetalert2";
import useCart from "../../../Hooks/useCart/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [cart] = useCart();

  useEffect(() => {
    fetch(
      `https://summer-camp-server-side-iota.vercel.app/users/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [user]);

  const navItems = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-slate-900 text-white" : "inactive"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-slate-900 text-white" : "inactive"
          }
          to="/instructors"
        >
          Instructors
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-slate-900 text-white" : "inactive"
          }
          to="/classes"
        >
          Classes
        </NavLink>
      </li>
      {user && (
        <li>
          {users[0]?.role === "admin" ? (
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-slate-900 text-white" : "inactive"
              }
              to="/dashboard/manageClasses"
            >
              Dashboard
            </NavLink>
          ) : users[0]?.role === "instructor" ? (
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-slate-900 text-white" : "inactive"
              }
              to="/dashboard/addAClass"
            >
              Dashboard
            </NavLink>
          ) : (
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-slate-900 text-white" : "inactive"
              }
              to="/dashboard/selectedClasses"
            >
              Dashboard
              <div className="badge badge-secondary">+{cart?.length || 0}</div>
            </NavLink>
          )}
        </li>
      )}
    </>
  );

  const handleSignOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to sign out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "Log out Successfully!",
              showConfirmButton: false,
              timer: 1000,
            });
          })
          .catch((error) => {
            console.log(error.message);
          });
      }
    });
  };

  return (
    <div className="navbar font-semibold fixed z-10 bg-opacity-30 bg-black md:text-white md:py-5 py-2 md:px-8 px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/">
          <img
            src="https://ld-wt73.template-help.com/tf/ispeak/images/logo-default-110x39.svg"
            alt="Image not found"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {!user ? (
          <Link to="/login" className="btn btn-outline text-white">
            Login
          </Link>
        ) : (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} alt="Image not found" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 text-black"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li onClick={handleSignOut}>
                <Link>Logout</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
