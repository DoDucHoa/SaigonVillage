import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "../components/Footer/Main";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import About from "../pages/About";
import Contact from "../pages/Contact";
// import Chefs from "../components/Chef/Main";
// import Book from "../components/Book/Main";

function Index() {
  const location = useLocation();

  const path = location.pathname;
  useEffect(() => {
    window.scroll(0, 0);
  }, [path]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/ourchefs" element={<Chefs />} /> */}
        {/* <Route path="/reservation" element={<Book />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default Index;
