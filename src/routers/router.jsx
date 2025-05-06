import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import React from "react";
import Home from "../pages/home/Home.jsx";
import CategoriePage from "../pages/categories/CategoriePage.jsx";
import Search from "../pages/search/Search.jsx";
import Shop from "../pages/shop/Shop.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <h1>About</h1>,
      },
      {
        path: "/categories/:categoryName",
        element: <CategoriePage />,
      },
      {
        path: "/rechercher",
        element: <Search />,
      },
      {
        path: "/boutique",
        element: <Shop />,
      },
    ],
  },
]);

export default router;
