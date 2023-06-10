import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Layout/Main";
import Home from "../Pages/Home/Home/Home";
import NotFoundPage from "../Pages/Shared/NotFoundPage/NotFoundPage";
import Login from "../Pages/LoginSystem/Login/Login";
import Register from "../Pages/LoginSystem/Register/Register";
import Instructors from "../Pages/Instructors/Instructors";
import InstructorDetails from "../Pages/InstructorDetails/InstructorDetails";
import Classes from "../Pages/Classes/Classes";
import DashBoard from "../Pages/DashBoard/DashBoard/DashBoard";
import SelectedClasses from "../Pages/DashBoard/Student/SelectedClasses/SelectedClasses";
import EnrolledClasses from "../Pages/DashBoard/Student/EnrolledClasses/EnrolledClasses";
import Payments from "../Pages/DashBoard/Student/Payments/Payments";
import ManageClasses from "../Pages/DashBoard/Admin/ManageClasses/ManageClasses";
import ManageUsers from "../Pages/DashBoard/Admin/ManageUsers/ManageUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "instructors",
        element: <Instructors></Instructors>
      },
      {
        path: "instructors/:id",
        element: <InstructorDetails></InstructorDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/instructors/${params.id}`)
      },
      {
        path: "classes",
        element: <Classes></Classes>
      }
    ],
  },
  {
    path: "dashboard",
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: "/dashboard/selectedClasses",
        element: <SelectedClasses></SelectedClasses>
      },
      {
        path: "/dashboard/enrolledClasses",
        element: <EnrolledClasses></EnrolledClasses>
      },
      {
        path: "/dashboard/payments",
        element: <Payments></Payments>
      },
      {
        path: "/dashboard/manageClasses",
        element: <ManageClasses></ManageClasses>
      },
      {
        path: "/dashboard/manageUsers",
        element: <ManageUsers></ManageUsers>
      }
    ]
  },
  {
    path: "*",
    element: <NotFoundPage></NotFoundPage>,
  },
]);

export default router;
