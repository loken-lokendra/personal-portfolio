import React, { lazy } from "react";
import paths from "../paths";
import LandingPage from "../pages/landing-page/index";

// Lazy load the components
const Home = lazy(() => import("../pages/home"));
const About = lazy(() => import("../pages/about"));
const Projects = lazy(() => import("../pages/projects"));
const Experience = lazy(() => import("../pages/experience"));
const Contact = lazy(() => import("../pages/contact"));

// Define routes
export const routes = [
  {
    path: paths.home,
    element: <LandingPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: paths.about,
        element: <About />,
      },
      {
        path: paths.projects,
        element: <Projects />,
      },
      {
        path: paths.experience,
        element: <Experience />,
      },
      {
        path: paths.contact,
        element: <Contact />,
      },
    ],
  },
];
