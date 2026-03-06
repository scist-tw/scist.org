"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Download } from "lucide-react";

export default function WorkerPage() {
  const [assets, setAssets] = useState([]);
  const [assetsLoading, setAssetsLoading] = useState(true);
  const [assetsError, setAssetsError] = useState(null);

  const normalizeAssets = (list) =>
    Array.isArray(list)
      ? list
          .filter(
            (i) =>
              i &&
              i.title &&
              i.preview &&
              Array.isArray(i.downloads) &&
              typeof i.dark !== "undefined",
          )
          .map((i) => ({
            title: i.title,
            preview: i.preview,
            downloads: i.downloads
              .filter((d) => d && d.label && d.href)
              .map((d) => ({ label: d.label, href: d.href })),
            dark: !!i.dark,
          }))
      : [];

  useEffect(() => {
    let active = true;
    fetch("/data/branding/data.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load branding.json");
        return res.json();
      })
      .then((data) => {
        if (active) {
          setAssets(normalizeAssets(data));
          setAssetsLoading(false);
        }
      })
      .catch((err) => {
        if (active) {
          setAssetsError(err.message);
          setAssetsLoading(false);
        }
      });
    return () => {
      active = false;
    };
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="mt-50 text-center">Page under construction</div>
      <Footer />
    </main>
  );
}
