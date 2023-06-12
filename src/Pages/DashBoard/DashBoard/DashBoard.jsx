import React, { useContext, useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
const DashBoard = () => {
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(
      `https://summer-camp-server-side-iota.vercel.app/users/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [user]);

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
            {users[0]?.role === "instructor" ? (
              <>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "bg-slate-900 text-white" : "inactive"
                    }
                    to="/dashboard/addAClass"
                  >
                    Add a Class
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "bg-slate-900 text-white" : "inactive"
                    }
                    to="/dashboard/myClasses"
                  >
                    My Classes
                  </NavLink>
                </li>
              </>
            ) : users[0]?.role === "admin" ? (
              <>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "bg-slate-900 text-white" : "inactive"
                    }
                    to="/dashboard/manageClasses"
                  >
                    Manage Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "bg-slate-900 text-white" : "inactive"
                    }
                    to="/dashboard/manageUsers"
                  >
                    Manage Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "bg-slate-900 text-white" : "inactive"
                    }
                    to="/dashboard/selectedClasses"
                  >
                    My Selected Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "bg-slate-900 text-white" : "inactive"
                    }
                    to="/dashboard/enrolledClasses"
                  >
                    My Enrolled Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "bg-slate-900 text-white" : "inactive"
                    }
                    to="/dashboard/payments"
                  >
                    My Payments
                  </NavLink>
                </li>
              </>
            )}
            <div className="divider"></div>
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
                to="/classes"
              >
                Classes
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
