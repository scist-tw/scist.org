import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "SCIST | 南臺灣學生資訊社群",
  description: "Students' Community of Information in Southern Taiwan",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/SCIST Logo/黑字.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/SCIST Logo/白字.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/SCIST Logo/白底黑字.png",
        type: "image/png",
      },
    ]
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="zh-TW">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
