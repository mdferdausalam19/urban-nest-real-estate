import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/notFound/NotFound";
import Home from "../pages/Home";
import UpdateProfile from "../pages/UpdateProfile";
import EstateDetails from "../pages/EstateDetails";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <NotFound></NotFound>,
      children: [
        {
          path: "/",
          loader: () => fetch("../data/estates.json"),
          element: <Home></Home>,
        },
        {
          path: "/update-profile",
          element: (
            <PrivateRoute>
              <UpdateProfile></UpdateProfile>
            </PrivateRoute>
          ),
        },
        {
          path: "/estate/:id",
          element: (
            <PrivateRoute>
              <EstateDetails></EstateDetails>
            </PrivateRoute>
          ),
        },
        {
          path: "/sign-in",
          element: <SignIn></SignIn>,
        },
        {
          path: "/sign-up",
          element: <SignUp></SignUp>,
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_startTransition: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);
