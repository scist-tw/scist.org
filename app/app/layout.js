import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "SCIST | 南臺灣學生資訊社群",
  description: "SCIST 是一群來自嘉義、台南、高雄和屏東四地的高中學生，經過許多活動以及比賽後深深感受到南北資訊能力以及資源的落差，我們希望透過 SCIST 舉辦的課程、研討會帶動南部學生的資訊能力水平，同時也帶來更多資源提供所有人進行學習！",
};


export default function RootLayout({ children }) {
  return (
    <html lang="zh-TW">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
