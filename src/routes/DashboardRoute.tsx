import { lazy } from "react";

const Dashboard = lazy(() => import("@/pages/Dashboard"));
const Todo = lazy(() => import("@/pages/Todo/Todo"));
const Table = lazy(() => import("@/pages/Table/Table"));

export const DashboardRoutes = [
  {
    path: "/",
    element: <Table/>,
    children: [
      {
        path: "/todo",
        element: <Todo/>,
      },
      {
        path: "/table",
        element: <Table/>,
      },
    ],
  },
];
