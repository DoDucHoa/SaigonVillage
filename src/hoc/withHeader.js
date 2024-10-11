import { useEffect, useState } from "react";
import Header from "../components/Header";

export const withHeader = (Component) => {
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
        <Header isNavVisible={isNavVisible} scrolled={scrolled} />
        <Component {...props} />
      </>
    );
  };
};
