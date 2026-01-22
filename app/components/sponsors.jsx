"use client"

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
    <section id="partners" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">合作夥伴</h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto" />
        </div>

        {tiers.map((tier, tIdx) => {
          const items = Array.isArray(tier?.items)
            ? tier.items
            : Array.isArray(tier?.sponsors)
              ? tier.sponsors
              : Object.values(tier?.items || tier?.sponsors || {});
            return (
            <div key={tIdx} className="mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              {tier.title ?? tier.name ?? ""}
              </h3>

              <div className="flex flex-wrap justify-center gap-5">
              {items.map((item, iIdx) => {
                const name = typeof item === "string" ? item : item?.name ?? "";
                const image = typeof item === "object" ? item?.image : undefined;
                const website = typeof item === "object" ? item?.website : undefined;

                return (
                <div
                  key={iIdx}
                  className={`bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all w-full max-w-[300px]${website ? " cursor-pointer" : ""}`}
                  onClick={() => {
                  if (website) window.open(website, "_blank", "noopener,noreferrer");
                  }}
                >
                  {image && (
                  <Image
                    src={`/data/sponsors/${image}`}
                    alt={name}
                    width={70}
                    height={70}
                    className="w-full h-40 object-cover rounded-md mb-4 bg-white"
                  />
                  )}
                  <p className="text-sm font-medium text-gray-500 text-center">
                  {name}
                  </p>
                </div>
                );
              })}
              </div>
            </div>
            );
        })}
      </div>
    </section>
  );
}
