"use client";
import React, { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "./ui/button";

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onClick = () => {
    try {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      window.scrollTo(0, 0);
    }
  };

  const baseClasses =
    "active:scale-80 fixed right-8 bottom-8 z-[1000] w-12 h-12 rounded-full flex items-center justify-center bg-white hover:bg-neutral-100 text-neutral-900 shadow-xl cursor-pointer transition-opacity transition-transform transition-all duration-200 ease-out";
  const visibilityClasses = visible
    ? "opacity-100 translate-y-0 pointer-events-auto"
    : "opacity-0 translate-y-2 pointer-events-none";

  return (
    <Button
      type="button"
      aria-label="Scroll to top"
      onClick={onClick}
      className={`${baseClasses} ${visibilityClasses}`}
    >
      <ChevronUp size={20} aria-hidden="true" />
    </Button>
  );
};

export default ScrollTop;
