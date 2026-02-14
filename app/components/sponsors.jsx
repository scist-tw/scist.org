"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function PartnersSection() {
  const [tiers, setTiers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;
    fetch("/data/sponsors/data.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load sponsors data");
        return res.json();
      })
      .then((data) => {
        if (active) {
          const normalizedTiers = Array.isArray(data)
            ? data
            : Array.isArray(data?.tiers)
              ? data.tiers
              : Object.values(data || {});
          setTiers(normalizedTiers);
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
    <section id="partners" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">合作夥伴</h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto" />
        </div>

        {error && <p className="text-center text-red-600">{error}</p>}

        {!error && (
          <>
            {/* Build a flat list of sponsors with tier labels */}
            {(() => {
              const flat = tiers.flatMap((tier) => {
                const title = tier?.title ?? tier?.name ?? "";
                const items = Array.isArray(tier?.items)
                  ? tier.items
                  : Array.isArray(tier?.sponsors)
                    ? tier.sponsors
                    : Object.values(tier?.items || tier?.sponsors || {});
                return items.map((item) => ({
                  name: typeof item === "string" ? item : (item?.name ?? ""),
                  image: typeof item === "object" ? item?.image : undefined,
                  website: typeof item === "object" ? item?.website : undefined,
                  tier: title,
                }));
              });

              if (loading) {
                return (
                  <div className="text-center text-gray-500">
                    Loading sponsors…
                  </div>
                );
              }

              if (!flat.length) {
                return (
                  <div className="text-center text-gray-500">
                    No sponsors found.
                  </div>
                );
              }

              // Duplicate the list to create a seamless marquee loop
              const looped = [...flat, ...flat];

              return (
                <div className="marquee">
                  <div className="marquee__track">
                    {looped.map((s, idx) => (
                      <div
                        key={`${s.name}-${idx}`}
                        className={`bg-white border border-gray-200 rounded-lg p-4 transition-all flex-none w-40 sm:w-48 flex flex-col${s.website ? " cursor-pointer" : ""}`}
                        onClick={() => {
                          if (s.website)
                            window.open(
                              s.website,
                              "_blank",
                              "noopener,noreferrer",
                            );
                        }}
                      >
                        <div>
                          {s.image && (
                            <Image
                              src={`/data/sponsors/${s.image}`}
                              alt={s.name}
                              width={96}
                              height={96}
                              className="w-full h-20 sm:h-24 object-contain rounded-md bg-white"
                              priority={idx < 8}
                            />
                          )}
                        </div>
                        <div className="flex-1 flex flex-col items-center justify-center">
                          <p className="text-sm text-center font-semibold text-gray-700">
                            {s.name}
                          </p>
                          <p className="text-xs text-gray-500">{s.tier}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}
          </>
        )}
      </div>

      {/* Component-scoped styles for the marquee */}
      <style jsx>{`
        .marquee {
          overflow: hidden;
          position: relative;
          width: 100%;
        }
        .marquee__track {
          display: flex;
          gap: 1rem;
          align-items: stretch;
          width: max-content;
          animation: marquee-scroll 35s linear infinite;
        }
        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        /* Optional: pause on hover */
        .marquee:hover .marquee__track {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
