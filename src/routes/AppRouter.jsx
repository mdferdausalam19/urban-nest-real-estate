import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/notFound/NotFound";
import Home from "../pages/Home";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <NotFound></NotFound>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
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
