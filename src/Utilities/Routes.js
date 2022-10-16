import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Orders from "../Components/Orders";
import Register from "../Components/Register";
import Main from "../Layout/Main";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Register /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      {
        path: "/home",
        element: (
          <PrivateRoutes>
            <Home />
          </PrivateRoutes>
        ),
      },
      {
        path: "/orders",
        element: (
          <PrivateRoutes>
            <Orders />{" "}
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
