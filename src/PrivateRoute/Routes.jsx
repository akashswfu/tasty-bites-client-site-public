import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/UserAuth/Login";
import Register from "../Pages/UserAuth/Register";
import AvailableFoods from "../Pages/AvailableFoods/AvailableFoods";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/availableFoods",
        element: <AvailableFoods></AvailableFoods>,
      },
    ],
  },
]);

export default router;
