"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";
import { useEffect, useState } from "react";

export default function OrganizationsSection() {
  // const regions = [
  //   {
  //     name: "嘉義",
  //     clubs: [
  //       { name: "嘉義高中", society: "資訊研究社", instagram: "test_user" },
  //       { name: "嘉義女中", society: "程式研究社", instagram: "test_user" },
  //       { name: "嘉華高中", society: "資訊社", instagram: "test_user" },
  //       { name: "永慶高中", society: "資訊研究社", instagram: "test_user" },
  //     ],
  //   },
  //   {
  //     name: "臺南",
  //     clubs: [
  //       { name: "臺南一中", society: "資訊社", instagram: "test_user" },
  //       { name: "臺南女中", society: "資訊研究社", instagram: "test_user" },
  //       { name: "興國高中", society: "資訊應用社", instagram: "test_user" },
  //       { name: "臺南二中", society: "資訊研究社", instagram: "test_user" },
  //       { name: "南大附中", society: "資訊研究社", instagram: "test_user" },
  //       { name: "黎明中學", society: "程式設計研究社", instagram: "test_user" },
  //       { name: "成大南工", society: "資訊社", instagram: "test_user" },
  //     ],
  //   },
  //   {
  //     name: "高屏",
  //     clubs: [
  //       { name: "高雄中學", society: "程式設計社", instagram: "test_user" },
  //       {
  //         name: "高雄女中",
  //         society: "電腦資訊暨網路科技研究社",
  //         instagram: "test_user",
  //       },
  //       { name: "鳳山高中", society: "電腦資訊社", instagram: "test_user" },
  //       { name: "新莊高中", society: "電腦研究社", instagram: "test_user" },
  //       { name: "鳳新高中", society: "電腦研究社", instagram: "test_user" },
  //       { name: "屏東高中", society: "資訊習社", instagram: "test_user" },
  //     ],
  //   },
  // ];
  const [regions, setRegions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;
    fetch("/data/organizations.json")
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
    <section id="organizations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">
            合作社團
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {regions.map((region) => (
            <div key={region.name} className="flex flex-col">
              <h3 className="text-2xl font-bold text-primary mb-6">
                {region.name}
              </h3>
              <div className="space-y-4 flex flex-col">
                {region.clubs.map((club, index) => (
                  <div
                    key={index}
                    className="bg-primary/5 border border-primary/20 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-primary/40 p-4 flex gap-4 items-center"
                  >
                    <div className="flex-shrink-0">
                      <Image
                        src="https://placehold.co/60x60?text=Logo"
                        alt={`${club.name} logo`}
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                    </div>

                    <div className="flex-grow min-w-0">
                      <h4 className="font-bold text-foreground text-sm mb-1 truncate">
                        {club.name}
                      </h4>
                      <p className="text-xs text-muted-foreground mb-2 truncate">
                        {club.society}
                      </p>

                      <Link
                        href={`https://instagram.com/${club.instagram}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors text-xs font-medium"
                      >
                        <Instagram size={14} />
                        <span>@{club.instagram}</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
