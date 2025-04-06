import { lazy, Suspense, useEffect, useState } from "react";

export const withHeader = (Component) => {
  const Header = lazy(() => import("../components/Header"));
  return (props) => {
    const [scrolled, setScrolled] = useState(false);
    const [isNavVisible, setIsNavVisible] = useState(true);

    const handleScroll = () => {
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
    };

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
    });

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
