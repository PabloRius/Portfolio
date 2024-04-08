import { createBrowserRouter } from "react-router-dom";

import { MainFeed } from "../components";

export const defaultRouter = createBrowserRouter([
  {
    path: "/",
    element: MainFeed(),
  },
  {
    path: "/projects",
    element: MainFeed(),
  },
]);
