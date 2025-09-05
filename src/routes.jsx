import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ListUsers from "./pages/ListUsers";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/lista-de-usuarios",
    element: <ListUsers />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
