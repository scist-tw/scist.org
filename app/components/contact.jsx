"use client";

import {
  Facebook,
  Instagram,
  Mail,
  BookOpen,
} from "lucide-react";
import { SiDiscord } from "react-icons/si";
import { useEffect, useState } from "react";

export default function ContactSection() {
  const ICONS = { Facebook, Instagram, Mail, BookOpen, SiDiscord };

  const [contactLinks, setContactLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;
    fetch("/data/contact/data.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load contact data");
        return res.json();
      })
      .then((data) => {
        if (active) {
          const normalized = Array.isArray(data)
            ? data.map((item) => ({
                ...item,
                icon: ICONS[item.icon] || Mail,
              }))
            : [];
          setContactLinks(normalized);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (active) {
          setError(err.message);
          setLoading(false);
        }
      });
    return () => {
      active = false;
    };
  }, []);
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">
            聯絡資訊
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12">
          {contactLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.ariaLabel}
                className="flex flex-col items-center gap-3 group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <p className="text-foreground group-hover:text-primary transition-colors font-bold">
                  {link.label}
                </p>
              </a>
            );
          })}
        </div>
      </div>

      <footer className="border-t border-primary/10 mt-20 py-6 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-foreground/60 text-sm">
            Copyright © {new Date().getFullYear()} SCIST. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
}
