"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [footerLinks, setFooterLinks] = useState({ column1: [], column2: [] });
  const [footerLoading, setFooterLoading] = useState(true);
  const [footerError, setFooterError] = useState(null);

  const normalizeList = (list) =>
    Array.isArray(list)
      ? list
          .filter((i) => i && i.title && i.url)
          .map((i) => ({ title: i.title, url: i.url }))
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
          setFooterLinks({
            column1: normalizeList(data?.column1),
            column2: normalizeList(data?.column2),
          });
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

  return (
    <footer className="border-t border-primary/10 mt-20 py-6 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* {!footerLoading && !footerError && (
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 mb-6">
            <a href="/" className="flex items-center gap-3">
              <img
                src="/public/SCIST Logo/黑字.svg"
                alt="SCIST"
                className="h-10 w-10 rounded-md"
              />
              <span className="text-xl font-bold text-foreground">SCIST</span>
            </a>

            <div className="flex flex-1 justify-start md:justify-end gap-12">
              <nav aria-label="Footer links column 1" className="flex flex-col gap-2 min-w-[160px]">
                {footerLinks.column1.map((link) => (
                  <a
                    key={`c1-${link.title}`}
                    href={link.url}
                    className="text-base md:text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.title}
                  </a>
                ))}
              </nav>
              <nav aria-label="Footer links column 2" className="flex flex-col gap-2 min-w-[160px]">
                {footerLinks.column2.map((link) => (
                  <a
                    key={`c2-${link.title}`}
                    href={link.url}
                    className="text-base md:text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        )} */}
        <p className="text-center text-foreground/60 text-sm">
          Copyright © {new Date().getFullYear()} SCIST. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
