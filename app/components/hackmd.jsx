"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

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
    <section id="calendar" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          className="relative block w-full h-[550px] cursor-pointer overflow-hidden rounded-xl border border-slate-200 shadow-sm transition hover:shadow-md"
          onClick={() => setIsExpanded(true)}
          aria-label="Expand calendar"
        >
          <iframe
            title="SCIST Calendar"
            src="https://hackmd.io/@SCIST/S6_Course_Info"
            className="w-full h-full pointer-events-none"
            frameBorder="0"
            scrolling="no"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-slate-900/40">
            <span className="rounded-full bg-white/90 px-5 py-2 text-sm font-semibold text-slate-900 shadow">
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
            className="relative mx-auto h-full w-full max-w-6xl overflow-auto rounded-xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="cursor-pointer absolute right-3 top-3 z-10 rounded-full bg-slate-100 p-2 text-slate-700 shadow"
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
    </section>
  );
}
