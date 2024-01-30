import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Notfound from "./pages/Notfound";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import Dashboard from "./pages/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup></Signup>,
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
  },
  {
    path: "/signin",
    element: <Signin></Signin>,
  },
  {
    path: "*",
    element: <Navigate to="/notfound" replace></Navigate>,
  },
  {
    path: "/notfound",
    element: <Notfound></Notfound>,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard></Dashboard>
      </ProtectedRoute>
    ),
  },
]);

function App() {
  return (
    <div className="APP">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
