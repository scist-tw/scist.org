"use client";

import { useEffect, useState } from "react";
import { ExternalLink, X } from "lucide-react";
import FadeInSection from "./FadeInSection";

export default function HackmdSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (!isExpanded) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsExpanded(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isExpanded]);

  return (
    <section id="hackmd" className="py-20 bg-(--background-temp)">
      <FadeInSection threshold={0.1} persistVisibility={true}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            className="group relative block w-full h-[550px] cursor-pointer overflow-hidden rounded-xl shadow-sm transition hover:shadow-md"
            onClick={() => setIsExpanded(true)}
            aria-label="Expand calendar"
          >
            <iframe
              title="SCIST Calendar"
              src="https://hackmd.io/@SCIST/S6_Course_Info"
              className="w-full h-full pointer-events-none transition duration-300 ease-out group-hover:scale-[1.01] group-hover:brightness-75"
              frameBorder="0"
              scrolling="no"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-slate-950/0 transition duration-300 ease-out group-hover:bg-slate-950/35">
              <span className="rounded-full border border-white/60 bg-white/10 px-5 py-2 text-sm font-semibold text-white opacity-0 shadow-lg backdrop-blur-sm scale-90 transition duration-300 ease-out group-hover:opacity-100 group-hover:scale-100">
                Click to expand
              </span>
            </div>
          </button>
        </div>

        {isExpanded && (
          <div
            className="fixed inset-0 z-50 bg-slate-900/60 p-3 sm:p-6"
            onClick={() => setIsExpanded(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Expanded calendar"
          >
            <div
              className="relative mx-auto h-full w-full max-w-6xl overflow-auto rounded-xl bg-(--background-temp) shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="absolute right-3 top-3 z-10 rounded-full bg-white hover:bg-neutral-200 text-neutral-900 shadow-xl cursor-pointer transition-colors duration-200 ease-out p-2"
                onClick={() => setIsExpanded(false)}
                aria-label="Close calendar"
              >
                <X size={20} strokeWidth={2.25} />
              </button>
              <iframe
                title="SCIST Calendar Expanded"
                src="https://hackmd.io/@SCIST/S6_Course_Info"
                className="h-full min-h-[70vh] w-full"
                frameBorder="0"
                scrolling="yes"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        )}
      </FadeInSection>
    </section>
  );
}
