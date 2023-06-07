import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = false;
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">Instructors</Link>
      </li>
      <li>
        <Link to="/">Classes</Link>
      </li>
      {user && (
        <li>
          <Link to="/">Dashboard</Link>
        </li>
      )}
    </>
  );
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
          <Link to="/login" className="btn btn-outline text-white">Login</Link>
        ) : (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-10/girl-names-that-start-with-c-zz-221027-768b76.jpg"
                  alt="Image not found"
                />
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
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
