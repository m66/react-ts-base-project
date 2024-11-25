import { lazy } from "react";
// import { Outlet } from "react-router-dom";

import { HOME, NOT_FOUND } from "./paths";
import MainLayout from "../layout/MainLayout";
import Loadable from "../components/ui/Loadable/Loadable";

const HomePage = Loadable(lazy(() => import("../pages/HomePage/HomePage")));
const NotFoundPage = Loadable(
  lazy(() => import("../pages/NotFoundPage/NotFoundPage"))
);

const MainRoutes = {
  path: HOME,
  element: <MainLayout />,
  children: [
    {
      path: "",
      element: <HomePage />,
    },
    // {
    //     path: "/some-path",
    //     element: <div><Outlet /></div>,
    //     children: [
    //         {
    //             path: '',
    //             element: <div></div>
    //         },
    //         {
    //             path: ':paramId',
    //             element: <SomePage />
    //         },
    //     ]
    // },
    {
      path: NOT_FOUND,
      element: <NotFoundPage />,
    },
  ],
};

export default MainRoutes;
