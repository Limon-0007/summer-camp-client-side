import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Layout/Main";
import Home from "../Pages/Home/Home/Home";
import NotFoundPage from "../Pages/Shared/NotFoundPage/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      }
    ],
  },
  {
    path: "*",
    element: <NotFoundPage></NotFoundPage>
  }
]);

export default router;
