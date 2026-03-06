"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "寒訓網站", href: "https://scist.camp", target: "_blank" },
    { label: "關於我們", href: "#about" },
    { label: "課程內容", href: "#activities" },
    { label: "公開日曆", href: "#calendar" },
    { label: "參與學校", href: "#organizations" },
    { label: "合作夥伴", href: "#partners" },
    { label: "聯絡資訊", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300">
      <div
        className={`
          transition-all duration-800 ease-out
          rounded-b-2xl
          ${
            isScrolled
              ? "md:max-w-6xl md:mx-auto md:mt-4 md:shadow-lg rounded-2xl"
              : "w-full"
          }
          bg-white/95 backdrop-blur-sm border-b md:border border-gray-200
          [transition-property:all,border-radius]
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <a
              href="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <img
                src="/index.webp"
                alt="SCIST Logo"
                className="h-6 w-auto"
                fetchPriority="high"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target={item.target ? item.target : "_self"}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 cursor-pointer"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden pb-4 border-t">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2 text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
