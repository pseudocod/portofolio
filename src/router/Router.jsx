import HomePage from "../pages/HomePage.jsx";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout.jsx";
import Oricand from "../pages/Oricand.jsx";
import BlogProject from "../pages/BlogProject.jsx";
const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "projects/oricand",
        element: <Oricand />,
      },
      {
        path: "projects/blog",
        element: <BlogProject />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
