import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrolltoTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(
        {
          top: 0,
          left: 0,
          behavior: "smooth",
        },
        [pathname]
      );
    });
  });
  return null;
};

export default ScrolltoTop;
