import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "SCIST | 南臺灣學生資訊社群",
  description: "Students' Community of Information in Southern Taiwan",
  keywords: [],
  authors: [{ name: "SCIST" }],

  metadataBase: new URL("https://scist.org"),

  openGraph: {
    title: "SCIST | 南臺灣學生資訊社群",
    description: "Students' Community of Information in Southern Taiwan",
    url: "https://scist.org",
    siteName: "scist.org",
    images: [
      {
        url: "https://raw.githubusercontent.com/scist-tw/scist.org/182684c1d597522a1bd9e6b9d0fe2694f2f83600/app/public/SCIST%20Logo/%E9%BB%91%E5%AD%97.svg",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "SCIST | 南臺灣學生資訊社群",
    description: "Students' Community of Information in Southern Taiwan",
    images: ["https://raw.githubusercontent.com/scist-tw/scist.org/182684c1d597522a1bd9e6b9d0fe2694f2f83600/app/public/SCIST%20Logo/%E9%BB%91%E5%AD%97.svg"],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-TW">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
