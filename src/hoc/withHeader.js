import { lazy, Suspense, useEffect, useState, useCallback } from "react";

export const withHeader = (Component) => {
  const Header = lazy(() => import("../components/Header"));
  return (props) => {
    const [scrolled, setScrolled] = useState(false);
    const [isNavVisible, setIsNavVisible] = useState(true);

    // Memoize the scroll handler
    const handleScroll = useCallback(() => {
      const offset = window.scrollY;
      if (offset > 1000) {
        setIsNavVisible(false);
      } else if (offset > 200) {
        setIsNavVisible(true);
        setScrolled(true);
      } else {
        setScrolled(false);
        setIsNavVisible(true);
      }
    }, []); // Empty dependency array since it doesn't depend on any props or state

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      // Add cleanup function
      return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]); // Add handleScroll to dependencies

    return (
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <Header isNavVisible={isNavVisible} scrolled={scrolled} />
        </Suspense>
        <Component {...props} />
      </>
    );
  };
};
