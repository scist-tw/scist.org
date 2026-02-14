import { ExternalLink } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">
            關於我們
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              SCIST
              是一群來自嘉義、台南、高雄和屏東的高中學生，致力於推廣資訊科技知識，連結南臺灣各年齡的資訊學生。
            </p>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              我們透過舉辦課程、營隊和研討會，為學生提供學習和交流的環境，帶動南部學生的資訊能力水平，同時也帶來更多資源提供所有人進行學習。
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              加入 SCIST，一起探索資訊世界的無限可能！
            </p>
          </div>

          <div className="text-center rounded-lg lg:mt-[-60]">
            <div className="flex justify-center">
              <img
                src="/SCIST%20Logo/%E9%BB%91%E5%AD%97.svg"
                alt="SCIST Logo"
                className="h-40 w-auto bg-white px-8 py-5 rounded-3xl"
              />
            </div>
            <a
              key={"branding"}
              href={"/branding"}
              className="inline-flex items-center gap-2 text-sm font-bold md:text-xl text-black max-w-2xl mx-auto hover:text-primary"
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              Branding
              <ExternalLink />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
