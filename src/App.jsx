import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
// import './index.css'
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
