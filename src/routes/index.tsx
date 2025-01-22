import { DashboardRoutes } from "./DashboardRoute";
import AuthRoutes from "./AuthRoutes";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";

const routeConfig: RouteObject[] = [...AuthRoutes, ...DashboardRoutes];

const myRoutes = createBrowserRouter(routeConfig);

export const AppRouter = () => {
  return <RouterProvider router={myRoutes} />;
};
