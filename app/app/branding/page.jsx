"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Download } from "lucide-react";

export default function BrandAssetsPage() {
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
    <main className="min-h-screen bg-black">
      <Navbar />
      <section className="pt-26 lg:px-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">我們的 Logo</h1>
            <div className="w-20 h-1 bg-primary rounded-full mx-auto" />
            <p className="text-muted mt-4">
              SCIST 的 Logo 提供亮色及暗色版本的 Logo 下載使用。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {assets.map((asset, idx) => (
              <article
                key={idx}
                className="rounded-xl border border-gray-200 overflow-hidden bg-white"
              >
                <header className="px-5 py-3 font-semibold border-b border-gray-100">
                  {asset.title}
                </header>

                <div
                  className={`p-6 min-h-48 flex items-center justify-center ${
                    asset.dark ? "bg-neutral-900" : "bg-white"
                  }`}
                >
                  <img
                    src={`/data/branding/${asset.preview}`}
                    alt={`${asset.title} preview`}
                    className={`max-h-28 w-auto ${
                      asset.dark ? "bg-transparent" : "bg-white"
                    } rounded-md p-4`}
                  />
                </div>

                <div className="px-5 py-4 border-t border-gray-100 flex flex-wrap gap-3">
                  {asset.downloads.map((d, i) => (
                    <Button key={i} asChild className="text-white">
                      <a
                        href={`/data/branding/${d.href}`}
                        // download
                        className="inline-flex items-center gap-2"
                      >
                        <Download className="h-4 w-4" aria-hidden="true" />
                        {d.label}
                      </a>
                    </Button>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <p className="text-xs text-muted mt-3">
            請遵守我們的使用規範，在任何情況下，都請不要針對 Logo
            本身進行任何變形、重製、換色、或套用特殊效果。
          </p>
        </div>
      </section>

      <section className="pt-10 pb-16 lg:px-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">書寫方式</h1>
          <p className="text-muted">
            SCIST 的英文全稱為「Students' Community of Information in Southern
            Taiwan」，當在純文字下使用簡稱提及 SCIST
            時，五個字母請全大寫；若版面許可，也可以使用全稱「SCIST
            南臺灣學生資訊社群」或「南臺灣學生資訊社群」。
            請務必注意英文與中文間的空格。
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
