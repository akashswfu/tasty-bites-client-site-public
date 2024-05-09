import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/UserAuth/Login";
import Register from "../Pages/UserAuth/Register";
import AvailableFoods from "../Pages/AvailableFoods/AvailableFoods";

import SingleFoodDetails from "../Pages/SingleFoodDetails/SingleFoodDetails";

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
      {
        path: "/food/:id",
        element: <SingleFoodDetails></SingleFoodDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/food/${params.id}`),
      },
    ],
  },
]);

export default router;
