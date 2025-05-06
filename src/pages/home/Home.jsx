import React from "react";
import Hero from "./Hero";
// import Navbar from "../components/Navbar";
import Categories from "./Categories";
import Tendance from "../shop/Tendance";
import Pourquoi from "./Pourquoi";
import DealsSection from "./DealsSection";
import Blog from "../blog/Blog";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <Tendance />
      <DealsSection />
      <Pourquoi />
      <Blog />

      {/* <Contact /> */}
      {/* <About /> */}
      {/* <Services /> */}
      {/* <Testimonials /> */}
    </>
  );
};

export default Home;
