import { RouteObject } from "react-router-dom";

import { MainFeed, Projects } from "../components";

const routes = (projects?: any[]): RouteObject[] => {
  return [
    {
      id: "Home",
      path: ``,
      element: projects
        ? MainFeed({ projects: projects })
        : MainFeed({ projects: [] }),
    },
    {
      id: "About Me",
      path: `about_me`,
      element: projects
        ? MainFeed({ projects: projects })
        : MainFeed({ projects: [] }),
    },
    {
      id: "CV",
      path: `resume`,
      element: projects
        ? MainFeed({ projects: projects })
        : MainFeed({ projects: [] }),
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
      element: projects
        ? MainFeed({ projects: projects })
        : MainFeed({ projects: [] }),
    },
  ];
};

export { routes };
