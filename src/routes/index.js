import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "../components/Footer/Main";
import About from "../components/About/Main";
// import Chefs from "../components/Chef/Main";
import Contact from "../components/Contact/Main";
import Menufour from "../components/Menu/Menufour";
// import Book from "../components/Book/Main";
import Hometwo from "../components/Headertwo/Main";

function Index() {
  const location = useLocation();

  const path = location.pathname;
  useEffect(() => {
    window.scroll(0, 0);
  }, [path]);

  return (
    <>
      {/* {homepage && <Header />} */}
      <Routes>
        <Route path="/" element={<Hometwo />} />
        <Route path="/menu" element={<Menufour />} />
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
