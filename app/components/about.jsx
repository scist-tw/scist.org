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
              我們透過舉辦課程、營隊和研討會，為學生提供學習和交流的環境，帶動南部學生的資訊能力水平，同時也帶來更多資源提供所有人進行學習！
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              加入 SCIST，一起探索資訊世界的無限可能！
            </p>
          </div>

          <div className="bg-primary rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6">我們的使命</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-white font-bold">✓</span>
                <span className="text-white">推廣資訊科技教育</span>
              </li>
              <li className="flex gap-3">
                <span className="text-white font-bold">✓</span>
                <span className="text-white">連結學生資源與機會</span>
              </li>
              <li className="flex gap-3">
                <span className="text-white font-bold">✓</span>
                <span className="text-white">培養業界領袖與人才</span>
              </li>
              <li className="flex gap-3">
                <span className="text-white font-bold">✓</span>
                <span className="text-white">建立永續的社群網絡</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
