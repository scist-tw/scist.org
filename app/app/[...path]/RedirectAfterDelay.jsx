"use client";

import { useEffect } from "react";

export default function RedirectAfterDelay({ targetUrl, targetTitle }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.assign(targetUrl);
    }, 3000);

    return () => clearTimeout(timer);
  }, [targetUrl]);

  return <p style={{ color: "black" }}>正在前往 {targetTitle}</p>;
}
