import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/notFound/NotFound";
import Home from "../pages/Home";
import UpdateProfile from "../pages/UpdateProfile";
import UserProfile from "../pages/UserProfile";
import EstateDetails from "../pages/EstateDetails";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";

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
          element: <UpdateProfile></UpdateProfile>,
        },
        {
          path: "/user-profile",
          element: <UserProfile></UserProfile>,
        },
        {
          path: "/estate/:id",
          element: <EstateDetails></EstateDetails>,
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
