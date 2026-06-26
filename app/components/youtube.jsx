"use client";

import { ExternalLink } from "lucide-react";
import FadeInSection from "./FadeInSection";

export default function YoutubeSection() {
  return (
    <section id="youtube" className="py-20 bg-(--background-temp)">
      <FadeInSection threshold={0.1} persistVisibility={true}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <a
            href="https://www.youtube.com/@scist-tw"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-xl shadow-sm transition hover:shadow-md"
            aria-label="Open SCIST YouTube channel in a new tab"
          >
            <img
              src="/youtube.png"
              alt="SCIST YouTube"
              className="block w-full h-auto transition duration-300 ease-out group-hover:scale-[1.01] group-hover:brightness-75"
            />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-slate-950/0 transition duration-300 ease-out group-hover:bg-slate-950/35">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/60 bg-white/10 text-white opacity-0 shadow-lg backdrop-blur-sm transition duration-300 ease-out group-hover:opacity-100 group-hover:scale-100 scale-90">
                <ExternalLink size={24} strokeWidth={2.2} />
              </span>
            </div>
          </a>
        </div>
      </FadeInSection>
    </section>
  );
}
