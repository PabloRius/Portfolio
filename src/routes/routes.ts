import { RouteObject } from "react-router-dom";

import { MainFeed, Projects } from "../components";

const routes = (projects?: any[]): RouteObject[] => {
  return [
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
      element: projects
        ? Projects({ projects: projects })
        : Projects({ projects: [] }),
    },
    {
      id: "Contact",
      path: `contact`,
      element: MainFeed(),
    },
  ];
};

export { routes };
