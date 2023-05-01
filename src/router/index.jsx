import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;
