import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Layout/Main";
import Home from "../Pages/Home/Home/Home";
import NotFoundPage from "../Pages/Shared/NotFoundPage/NotFoundPage";
import Login from "../Pages/LoginSystem/Login/Login";
import Register from "../Pages/LoginSystem/Register/Register";
import Instructors from "../Pages/Instructors/Instructors";
import InstructorDetails from "../Pages/InstructorDetails/InstructorDetails";

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
      }
    ],
  },
  {
    path: "*",
    element: <NotFoundPage></NotFoundPage>,
  },
]);

export default router;
