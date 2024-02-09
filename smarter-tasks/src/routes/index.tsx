import { Navigate, createBrowserRouter } from "react-router-dom";

import Signin from "../pages/signin";
import Signup from "../pages/signup";
import AccountLayout from "../layouts/account";
import ProtectedRoute from "./ProtectedRoutes";
import Projects from "../pages/projects";
import Members from "../pages/members";
import Logout from "../pages/logout";
import NotFound from "../pages/Notfound";

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/account/projects" replace /> },
  {
    path: "/",
    element: <Signin />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/logout",
    element: <Logout></Logout>,
  },
  {
    path: "/notfound",
    element: <NotFound></NotFound>
  },
  {
    path: "*",
    element: <NotFound></NotFound>
  },

  // protected route
  {
    path: "account",
    element: (
      <ProtectedRoute>
        <AccountLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Navigate to="/account/projects" replace /> },
      {
        path: "projects",
        element: <Projects></Projects>,
      },
      {
        path: "members",
        element: <Members></Members>,
      },
    ],
  },
]);
export default router;
