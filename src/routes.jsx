import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/users",
    element: <Home />,
  },
  {
    path: "/lista-de-usuarios",
    element: <ListUsers />,
  }
]);

export default router;