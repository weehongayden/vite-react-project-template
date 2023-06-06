import { createBrowserRouter } from "react-router-dom";

import About from "@pages/About";
import App from "@pages/App";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
