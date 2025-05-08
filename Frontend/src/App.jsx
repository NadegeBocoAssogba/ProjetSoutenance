import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
// import './index.css'
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { saveCartToLocalStorage } from "./utils/localStorage";

function App() {
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    saveCartToLocalStorage(cart);
  }, [cart]);

  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
