"use client";

import { useEffect, useState } from "react";
import Fog from "../ui/Fog";

export default function () {
  const [showTopFog, setShowTopFog] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowTopFog(scrollY > 40);
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
      <Fog side="bottom" />
    </>
  );
}
