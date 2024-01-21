import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import TaskListPage from "./pages/TaskListPage";
import Layout from "./Layout";
import TaskDetailsPage from "./pages/TaskDetailsPage";
import Signin from "./pages/Signin";
import ProtectedRoute from "./ProtectedRoute";
import Notfound from "./pages/Notfound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/signin" replace></Navigate>,
  },
  {
    path: "/signin",
    element: <Signin></Signin>,
  },
  {
    path: "/*",
    element: <Navigate to="/notfound" replace></Navigate>,
  },
  {
    path: "notfound",
    element: <Notfound></Notfound>,
  },
  {
    element: (
      <ProtectedRoute>
        <Layout></Layout>
      </ProtectedRoute>
    ),
    children: [
      {
        path: "home",
        element: <HomePage></HomePage>,
      },
      {
        path: "tasks",
        element: <TaskListPage></TaskListPage>,
      },
      {
        path: "tasks/:id",
        element: <TaskDetailsPage></TaskDetailsPage>,
      },
    ],
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
