'use client'
import { useEffect, useState } from 'react';
import { Link2 } from 'lucide-react'; // add icon import

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
        backgroundImage: 'url("https://scist.org/static/images/hero.jpg")',
      }}
    >
      {/* Overlay with background blur */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-xs" />

      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <div className="flex justify-center mb-6">
          <img
            src="/SCIST Logo/黑字.svg"
            alt="SCIST Logo"
            className="h-40 w-auto bg-white px-8 py-5 rounded-3xl"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          南臺灣學生資訊社群
        </h1>
        <p className="text-lg font-bold md:text-xl text-white max-w-2xl mx-auto">
          Students' Community of Information in Southern Taiwan
        </p>
      </div>

      {/* Bottom links */}
      {loading ? (
        <div className="absolute bottom-6 left-0 right-0 z-10">
          <div className="mx-auto max-w-4xl flex flex-wrap justify-center gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="text-white/90 hover:text-white px-3 py-1 rounded-md bg-black/30 backdrop-blur-sm">
                Loading...
              </div>
            ))}
          </div>
        </div>
      ) : error ? (
        <div className="absolute bottom-6 left-0 right-0 z-10">
          <div className="mx-auto max-w-4xl flex flex-wrap justify-center gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="text-white/90 hover:text-white px-3 py-1 rounded-md bg-black/30 backdrop-blur-sm">
                {error}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="absolute bottom-6 left-0 right-0 z-10">
          <div className="mx-auto max-w-4xl flex flex-wrap justify-center gap-4">
            {links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                className="inline-flex items-center gap-2 text-white/90 hover:text-white px-3 py-1 rounded-md bg-black/30 backdrop-blur-sm transition-transform duration-200 hover:scale-105"
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
