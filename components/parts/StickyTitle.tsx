"use client";

import { classNames } from "@/lib/utils";
import { useEffect, useState } from "react";

type Props = {
  title?: string;
  scrollThreshold?: number;
};

export default function (props: Props) {
  const { title, scrollThreshold = 200 } = props;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollThreshold]);

  const localClassNames = classNames(
    "text-xl pt-8 sticky z-20 top-0 font-medium text-zinc-300 transition-all duration-300 ease-in-out",
    isVisible
      ? "opacity-100 translate-y-0"
      : "opacity-0 -translate-y-2 pointer-events-none"
  );

  return <h1 className={localClassNames}>{title}</h1>;
}
