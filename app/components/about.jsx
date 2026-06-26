import { ExternalLink } from "lucide-react";
import FadeInSection from "./FadeInSection";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-(--background-temp)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 text-balance">
            {/* text-foreground */}
            &lt;關於我們/&gt;
          </h2>
          <div className="w-20 h-1 bg-white rounded-full" />
        </FadeInSection>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeInSection>
            <p className="text-lg text-white mb-6 leading-relaxed">
              {/* text-foreground/80 */}
              SCIST
              是一群來自嘉義、台南、高雄和屏東的高中學生，致力於推廣資訊科技知識，連結南臺灣各年齡的資訊學生。
            </p>
            <p className="text-lg text-white mb-6 leading-relaxed">
              {/* text-foreground/80 */}
              我們透過舉辦課程、營隊和研討會，為學生提供學習和交流的環境，帶動南部學生的資訊能力水平，同時也帶來更多資源提供所有人進行學習。
            </p>
            <p className="text-lg text-white leading-relaxed">
              加入 SCIST，一起探索資訊世界的無限可能！
            </p>
          </FadeInSection>

          <FadeInSection className="text-center rounded-lg lg:mt-[-60]">
            <div className="flex justify-center">
              <img
                src="/SCIST%20Logo/%E9%BB%91%E5%AD%97.svg"
                alt="SCIST Logo"
                className="h-40 w-auto bg-white px-8 py-5 rounded-3xl mb-4"
              />
            </div>
            <a
              key={"workers"}
              href={"/workers"}
              className="inline-flex items-center gap-2 text-sm font-bold md:text-xl text-white max-w-2xl mx-auto hover:opacity-65 transition-opacity"
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              工人名單
              <ExternalLink />
            </a>
            <a
              key={"branding"}
              href={"/branding"}
              className="inline-flex ml-8 items-center gap-2 text-sm font-bold md:text-xl text-white max-w-2xl mx-auto hover:opacity-65 transition-opacity"
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              Branding
              <ExternalLink />
            </a>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
