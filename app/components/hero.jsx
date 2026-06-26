"use client";
import { useEffect, useState } from "react";
import { Link2 } from "lucide-react";

export default function Hero() {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;
    fetch("/data/hero/data.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load hero links");
        return res.json();
      })
      .then((data) => {
        if (active) {
          setLinks(Array.isArray(data) ? data : []);
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
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center pt-16"
      style={{
        backgroundImage: "url('/hero.webp')",
      }}
    >
      {/* Overlay with background blur */}
      <div className="absolute inset-0 bg-(--background-temp)/30 backdrop-blur-xs" />

      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <div className="flex justify-center mb-6">
          {/* <img
            src="/SCIST%20Logo/白字.svg"
            alt="SCIST Logo"
            className="h-40 pl-10 w-auto bg-(--background-temp) px-8 py-5 rounded-3xl"
          /> */}
          <div className="relative inline-flex">
            <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle,rgba(255,255,255,0.3)_40%,rgba(0,0,0,0)_100%)]" />
            <img
              src="/SCIST%20Logo/白字.svg"
              alt="SCIST Logo"
              className="relative h-40 w-auto px-8 py-5 pl-10"
            />
          </div>
        </div>
        {/* <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance"> */}
        <h1 className="text-[clamp(2rem,6vw,4.5rem)] font-bold mb-0 text-white">
          南臺灣學生資訊社群
        </h1>
        {/* <p className="text-lg font-bold md:text-xl text-white max-w-2xl mx-auto"> */}
        <p className="text-[clamp(1rem,2vw,1.25rem)] font-bold md:text-xl text-white max-w-[85%] mx-auto">
          Students' Community of Information in Southern Taiwan
        </p>
      </div>

      {/* Bottom links */}
      {loading ? (
        <div className="absolute bottom-10 left-0 right-0 z-10">
          <div className="mx-auto max-w-4xl flex flex-wrap justify-center gap-4 text-center">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="text-white/90 hover:text-white px-3 py-1 rounded-md bg-(--background-temp)/30 backdrop-blur-sm"
              >
                Loading
              </div>
            ))}
          </div>
        </div>
      ) : error ? (
        <div className="absolute bottom-10 left-0 right-0 z-10">
          <div className="mx-auto max-w-4xl flex flex-wrap justify-center gap-4 text-center">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="text-white/90 hover:text-white px-3 py-1 rounded-md bg-(--background-temp)/30 backdrop-blur-sm"
              >
                {error}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="absolute bottom-10 left-0 right-0 z-10 mr-5">
          <div className="mx-auto max-w-4xl flex flex-wrap justify-center gap-4 text-center">
            {links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white px-3 py-1 rounded-md bg-(--background-temp)/30 backdrop-blur-sm transition-transform duration-180 hover:scale-115 shrink-0"
              >
                <Link2 className="w-4 h-4" aria-hidden="true" />
                {link.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
