import React from "react";
import { FaBars } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const DashBoard = () => {
  const admin = true;
  const instructor = false;
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content md:py-6 py-14 md:px-8 px-2">
          {/* Page content here */}
          <Outlet></Outlet>
        </div>
        <label
          htmlFor="my-drawer-2"
          className="drawer-button lg:hidden text-xl m-4"
        >
          <FaBars></FaBars>
        </label>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-3/4 md:w-60 h-full bg-base-200 text-base-content font-semibold text-sm gap-2">
            {instructor ? (
              <>
                <li>
                  <Link>Add a Class</Link>
                </li>
                <li>
                  <Link>My Classes</Link>
                </li>
              </>
            ) : admin ? (
              <>
                <li>
                  <Link to="/dashboard/manageClasses">Manage Classes</Link>
                </li>
                <li>
                  <Link to="/dashboard/manageUsers">Manage Users</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/dashboard/selectedClasses">
                    My Selected Classes
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/enrolledClasses">My Enrolled Classes</Link>
                </li>
                <li>
                  <Link to="/dashboard/payments">My Payments</Link>
                </li>
              </>
            )}
            <div className="divider"></div>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/classes">Classes</Link>
            </li>
            <li>
              <Link to="/instructors">Instructors</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
