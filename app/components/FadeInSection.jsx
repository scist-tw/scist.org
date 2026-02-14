"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export default function FadeInSection({ children, className, threshold = 1 }) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const el = domRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setVisible(entry.isIntersecting);
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.unobserve(el);
  }, [threshold]);

  return (
    <div
      ref={domRef}
      className={cn(
        "transition-all duration-700 ease-out will-change-transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
        className,
      )}
    >
      {children}
    </div>
  );
}
