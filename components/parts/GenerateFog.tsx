"use client";

import { useEffect, useState } from "react";
import Fog from "../ui/Fog";

export default function () {
  const [showTopFog, setShowTopFog] = useState(false);
  const [showBottomFog, setShowBottomFog] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowTopFog(scrollY > 40);

      // Проверяем, виден ли футер
      const footer = document.querySelector("footer");
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const isFooterVisible = footerRect.top < window.innerHeight;
        setShowBottomFog(!isFooterVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Проверяем начальное состояние
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Fog side="top" show={showTopFog} />
      <Fog side="bottom" show={showBottomFog} />
    </>
  );
}
