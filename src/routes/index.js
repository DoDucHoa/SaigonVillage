import React, { useEffect, Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "../components/Footer/Main";
// import Chefs from "../components/Chef/Main";
// import Book from "../components/Book/Main";

// Lazy load all page components
const Home = lazy(() => import("../pages/Home"));
const Menu = lazy(() => import("../pages/Menu"));
const Contact = lazy(() => import("../pages/Contact"));

// Loading component
const LoadingFallback = () => (
  <div className="loading-container">
    <div className="loading-spinner"></div>
  </div>
);

function Index() {
  const location = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/ourchefs" element={<Chefs />} /> */}
          {/* <Route path="/reservation" element={<Book />} /> */}
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default Index;
