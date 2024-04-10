import { RouteObject } from "react-router-dom";

import { MainFeed } from "../components";

const routes: RouteObject[] = [
  {
    id: "Home",
    path: ``,
    element: MainFeed(),
  },
  {
    id: "About Me",
    path: `about_me`,
    element: MainFeed(),
  },
  {
    id: "CV",
    path: `resume`,
    element: MainFeed(),
  },
  {
    id: "Projects",
    path: `projects`,
    element: MainFeed(),
  },
  {
    id: "Contact",
    path: `contact`,
    element: MainFeed(),
  },
];

export { routes };
