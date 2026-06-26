"use client";

import { ExternalLink, Info, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Footer() {
  const [footerLinks, setFooterLinks] = useState([]);
  const [footerLoading, setFooterLoading] = useState(true);
  const [footerError, setFooterError] = useState(null);
  const [creditsOpen, setCreditsOpen] = useState(false);

  const credits = [
    "Frontend: g4o2 (胡凱翔)",
    "Frameworks & libraries: Next.js, Tailwind CSS, Shadcn ui",
    "Fonts: GenSenRoundedTC",
    "Icons: Lucide React",
    {
      label: "Github: scist-tw/scist.org",
      url: "https://github.com/scist-tw/scist.org",
    },
  ];

  const normalizeList = (list) =>
    Array.isArray(list)
      ? list
          .filter((i) => i && i.title && i.url)
          .map((i) => ({ title: i.title, url: i.url, newTab: !!i.newTab }))
      : [];

  useEffect(() => {
    let active = true;
    fetch("/data/footer/data.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load footer.json");
        return res.json();
      })
      .then((data) => {
        if (active) {
          const links = Array.isArray(data)
            ? normalizeList(data)
            : [
                ...normalizeList(data?.column1),
                ...normalizeList(data?.column2),
              ];
          setFooterLinks(links);
          setFooterLoading(false);
        }
      })
      .catch((err) => {
        if (active) {
          setFooterError(err.message);
          setFooterLoading(false);
        }
      });
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (!creditsOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setCreditsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [creditsOpen]);

  return (
    <>
      <footer className="border-t border-white/15 mt-20 py-6 bg-(--background-temp)">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {!footerLoading && !footerError && (
            <nav
              aria-label="Footer links"
              className="mb-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
            >
              {footerLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.url}
                  className="inline-flex items-center gap-1 text-base font-bold text-white/50 transition-opacity hover:opacity-65 md:text-lg"
                  target={link.newTab ? "_blank" : undefined}
                  rel={link.newTab ? "noopener noreferrer" : undefined}
                >
                  {link.title}
                  <ExternalLink className="h-4 w-4" />
                </a>
              ))}
            </nav>
          )}
          <div className="flex flex-col items-center gap-3 text-center text-sm text-white/40 sm:flex-row sm:justify-center sm:gap-2">
            <p>
              Copyright © {new Date().getFullYear()} SCIST. All rights reserved.
            </p>
            <button
              type="button"
              onClick={() => setCreditsOpen(true)}
              aria-label="Open credits"
              className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/15 text-white/60 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 cursor-pointer"
            >
              <Info className="h-4 w-4" />
            </button>
          </div>
        </div>
      </footer>

      {creditsOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 px-4 py-6 backdrop-blur-sm"
          onClick={() => setCreditsOpen(false)}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="credits-title"
            className="relative w-full max-w-lg rounded-3xl border border-white/10 bg-(--background-temp) p-6 text-white shadow-2xl shadow-black/40"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2
                  id="credits-title"
                  className="mt-2 text-2xl font-bold text-white"
                >
                  Credits
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setCreditsOpen(false)}
                aria-label="Close credits"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/70 transition-colors hover:bg-white/10 hover:text-white cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-6 space-y-4">
              {/* <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
                <p className="leading-6">
                  This site was assembled with the following tools and assets.
                </p>
              </div> */}

              <ul className="space-y-2 text-sm leading-6 text-white/80">
                {credits.map((item) => (
                  <li
                    key={typeof item === "string" ? item : item.label}
                    className="pl-4"
                  >
                    <span className="mr-2 text-white/55">-</span>
                    {typeof item === "string" ? (
                      item
                    ) : (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-white/80 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white hover:decoration-white/60"
                      >
                        {item.label}
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
