"use client";

import {
  Facebook,
  Instagram,
  Mail,
  MessageCircle,
  BookOpen,
} from "lucide-react";

export default function ContactSection() {
  const contactLinks = [
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://facebook.com/scist",
      ariaLabel: "Visit SCIST on Facebook",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/scist",
      ariaLabel: "Visit SCIST on Instagram",
    },
    {
      icon: MessageCircle,
      label: "Discord",
      href: "https://discord.gg/scist",
      ariaLabel: "Join SCIST Discord",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:contact@scist.org",
      ariaLabel: "Email SCIST",
    },
    {
      icon: BookOpen,
      label: "HackMD",
      href: "https://hackmd.io/scist",
      ariaLabel: "Visit SCIST HackMD",
    },
  ];

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
                <p className="text-foreground group-hover:text-primary transition-colors">
                  {link.label}
                </p>
              </a>
            );
          })}
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
          <p className="text-foreground/80 mb-4">
            歡迎加入 SCIST，與我們一起推動南臺灣資訊社群的發展！
          </p>
        </div>
      </div>

      <footer className="border-t border-primary/10 mt-12 py-6 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-foreground/60 text-sm">
            © {new Date().getFullYear()} Students' Community of Information in
            Southern Taiwan (SCIST). All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
}
