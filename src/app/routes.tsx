import { createBrowserRouter } from "react-router";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import Reservas from "./pages/Reservas";
import Funcionarios from "./pages/Funcionarios";
import Reportes from "./pages/Reportes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "reservas",
        element: <Reservas />,
      },
      {
        path: "funcionarios",
        element: <Funcionarios />,
      },
      {
        path: "reportes",
        element: <Reportes />,
      },
    ],
  },
]);
