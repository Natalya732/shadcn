import { lazy } from "react";

const Login = lazy(() => import("@/pages/Login"));
const Register = lazy(() => import("@/pages/Register"));

const AuthRoutes = [
  { path: "./login", element: <Login /> },
  { path: "./register", element: <Register /> },
];

export default AuthRoutes;
