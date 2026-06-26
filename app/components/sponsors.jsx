"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import FadeInSection from "./FadeInSection";

export default function PartnersSection() {
  const [tiers, setTiers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getTierLabelClassName = (tier) => {
    if (tier === "鑽石級贊助單位") return "tier-label shine";
    if (tier === "白金級贊助單位") return "tier-label chrome";
    if (tier === "黃金級贊助單位") return "tier-label tier-label--gold";
    if (tier === "協辦單位" || tier === "特別感謝") return "text-white/60";
    return "text-white";
  };

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
    <section id="partners" className="py-20 bg-(--background-temp)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            &lt;合作夥伴/&gt;
          </h2>
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
                <FadeInSection>
                  <div className="marquee">
                    <div className="marquee__track">
                      {looped.map((s, idx) => (
                        <div
                          key={`${s.name}-${idx}`}
                          className={`bg-(--background-temp) border-3 border-white/10 rounded-lg p-4 transition-all flex-none w-40 sm:w-48 flex flex-col${s.website ? " cursor-pointer" : ""}`}
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
                          <div className="flex-1 flex flex-col items-center justify-center mt-1">
                            <p className="text-sm text-center font-semibold text-white">
                              {s.name}
                            </p>
                            <p
                              className={`mt-1 text-xs ${getTierLabelClassName(s.tier)}`}
                            >
                              {s.tier}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeInSection>
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

        .tier-label {
          display: inline-block;
          font-weight: 600;
          letter-spacing: 0.02em;
        }

        .shine,
        .chrome {
          background: #222 -webkit-gradient(
              linear,
              left top,
              right top,
              from(#222),
              to(#222),
              color-stop(0.5, #fff)
            )
            0 0 no-repeat;
          color: rgba(255, 255, 255, 0.3);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
          text-shadow: 0 0 0 rgba(255, 255, 255, 0.5);
        }

        .shine {
          -webkit-background-size: 150px;
          background-size: 150px;
          -webkit-animation-name: shine;
          -webkit-animation-duration: 5s;
          animation-name: shine;
          animation-duration: 5s;
          animation-timing-function: linear;
          text-shadow: 0 0 0 rgba(255, 255, 255, 0.5);
        }

        .chrome {
          background-image: -webkit-linear-gradient(
            -40deg,
            transparent 0%,
            transparent 40%,
            #fff 50%,
            transparent 60%,
            transparent 100%
          );
          -webkit-background-size: 200px;
          background-size: 200px;
          -webkit-animation-name: shine;
          -webkit-animation-duration: 5s;
          animation-name: shine;
          animation-duration: 5s;
          animation-timing-function: linear;
          text-shadow: 0 0 0 rgba(255, 255, 255, 0.5);
        }

        .tier-label--gold {
          color: #d6a93a;
        }

        @-webkit-keyframes shine {
          0% {
            background-position: -1000px;
          }
          10% {
            background-position: -1000px;
          }
          20% {
            background-position: top left;
          }
          90% {
            background-position: top right;
          }
          100% {
            background-position: 1000px;
          }
        }

        @keyframes shine {
          0% {
            background-position: -1000px;
          }
          10% {
            background-position: -1000px;
          }
          20% {
            background-position: top left;
          }
          90% {
            background-position: top right;
          }
          100% {
            background-position: 1000px;
          }
        }
      `}</style>
    </section>
  );
}
