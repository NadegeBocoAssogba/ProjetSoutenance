import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import React from "react";
import Home from "../pages/home/Home.jsx";
import CategoriePage from "../pages/categories/CategoriePage.jsx";
import Search from "../pages/search/Search.jsx";
import Shop from "../pages/shop/Shop.jsx";
import SingleProduct from "../pages/shop/productsDetails/SingleProduct.jsx";
import Login from "../components/Login.jsx";
import Register from "../components/Register.jsx";
import About from "../pages/about/About.jsx";
import Blog from "../pages/blog/BlogPage.jsx";
import PagePaiement from "../pages/paiement/PagePaiement.jsx";

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
        path: "/accueil",
        element: <Home />,
      },
      {
        path: "/apropos",
        element: <About />,
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
      {
        path: "/boutique/:id",
        element: <SingleProduct />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/connexion",
        element: <Login />,
      },
      {
        path: "/inscription",
        element: <Register />,
      },
      {
        path: "/paiement",
        element: <PagePaiement />,
      },
    ],
  },
]);

export default router;
