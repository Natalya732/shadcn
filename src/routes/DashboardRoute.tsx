import { lazy } from "react";

const Dashboard = lazy(() => import("@/pages/Dashboard"));
export const DashboardRoutes = [
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/todo",
        element: lazy(() => import("@/pages/Todo")),
      },
      {
        path: "/table",
        element: lazy(() => import("@/pages/Table")),
      },
    ],
  },
];
