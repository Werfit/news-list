import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../pages/dashboard/dashboard.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
]);

export { router };
