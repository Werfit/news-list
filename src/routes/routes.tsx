import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../pages/dashboard/dashboard.tsx";
import { Article } from "../pages/article/article.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/:title",
    element: <Article />,
  },
]);

export { router };
