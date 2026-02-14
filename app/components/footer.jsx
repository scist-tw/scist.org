"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Footer() {
  const [footerLinks, setFooterLinks] = useState([]);
  const [footerLoading, setFooterLoading] = useState(true);
  const [footerError, setFooterError] = useState(null);

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

  return (
    <footer className="border-t border-primary/10 mt-20 py-6 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!footerLoading && !footerError && (
          <nav
            aria-label="Footer links"
            className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 mb-6"
          >
            {footerLinks.map((link) => (
              <a
                key={link.title}
                href={link.url}
                className="text-base font-bold md:text-lg text-foreground/80 hover:text-primary transition-colors"
                target={link.newTab ? "_blank" : undefined}
                rel={link.newTab ? "noopener noreferrer" : undefined}
              >
                {link.title}
              </a>
            ))}
          </nav>
        )}
        <p className="text-center text-foreground/60 text-sm">
          Copyright © {new Date().getFullYear()} SCIST. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
