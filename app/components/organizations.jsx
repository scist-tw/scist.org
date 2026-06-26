"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";
import { useEffect, useState } from "react";
import FadeInSection from "./FadeInSection";

export default function OrganizationsSection() {
  const [regions, setRegions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;
    fetch("/data/organizations/data.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load organizations.json");
        return res.json();
      })
      .then((data) => {
        if (active) {
          setRegions(Array.isArray(data) ? data : []);
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
    <section id="organizations" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 text-balance">
            參與學校
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {regions.map((region) => (
            <div key={region.name} className="flex flex-col">
              <FadeInSection>
                <h3 className="text-2xl font-bold text-primary mb-6">
                  {region.name}
                </h3>
              </FadeInSection>
              <div className="space-y-3 flex flex-col">
                {region.clubs.map((club, index) => (
                  <FadeInSection key={index}>
                    {club.instagram ? (
                      <div className="group perspective-[1000px] h-28">
                        <div className="cursor-pointer relative h-full w-full transition-transform duration-500 transform-3d group-hover:transform-[rotateY(180deg)]">
                          {/* Front */}
                          <div className="absolute inset-0 bg-black border-3 border-white/10 rounded-3xl overflow-hidden p-4 flex gap-4 items-center backface-hidden">
                            <div className="shrink-0">
                              <Image
                                src={`/data/organizations/${club.image}`}
                                alt={`${club.school} logo`}
                                width={80}
                                height={80}
                                className="rounded-full"
                              />
                            </div>
                            <div className="grow min-w-0">
                              <h4 className="font-bold text-white text-lg mb-1 truncate">
                                {club.school}
                              </h4>
                              <p className="text-md font-bold text-muted-foreground mb-1 truncate">
                                {club.name}
                              </p>
                            </div>
                          </div>

                          {/* Back */}
                          <Link
                            href={`https://instagram.com/${club.instagram}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute inset-0 rounded-3xl overflow-hidden p-4 flex flex-col items-center justify-center bg-[linear-gradient(135deg,#f58529,#feda77,#dd2a7b,#8134af,#515bd4)] text-white transform-[rotateY(180deg)] backface-hidden"
                          >
                            <Instagram size={24} />
                            <span className="mt-2 font-semibold text-sm truncate">
                              @{club.instagram}
                            </span>
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-white rounded-3xl overflow-hidden p-4 flex gap-4 items-center h-28">
                        <div className="shrink-0">
                          <Image
                            src={`/data/organizations/${club.image}`}
                            alt={`${club.school} logo`}
                            width={80}
                            height={80}
                            className="rounded-full"
                          />
                        </div>
                        <div className="grow min-w-0">
                          <h4 className="font-bold text-foreground text-lg mb-1 truncate">
                            {club.school}
                          </h4>
                          <p className="text-md font-bold text-muted-foreground mb-1 truncate">
                            {club.name}
                          </p>
                        </div>
                      </div>
                    )}
                  </FadeInSection>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
