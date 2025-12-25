export default function ActivitiesSection() {
  const activities = [
    {
      title: "演算法",
      description: "基礎資料結構與演算法",
      content: ["DP 動態規劃", "Greedy 貪心法", "基礎數論", "基礎圖論、BFS & DFS", "進階資料結構", "RMQ"
      ],
      goal: "目標：零程式基礎 ->APCS 觀念 3/實作 3 級分以上",
      image: "https://media.discordapp.net/attachments/1022870915492610148/1425819604680310864/-.png?ex=694dd43c&is=694c82bc&hm=87c9b94b5958dca984a475638ff3e87b6fff24489d4344fae261ed16f7117302&=&format=webp&quality=lossless&width=578&height=723"
    },
    {
      title: "資訊安全",
      description: "SCIST 的資訊安全課程包含五大經典主題: ",
      content: ["PWN", "密碼學", "逆向工程", "網頁安全", "數位鑑識"],
      goal: "期望在為期一年的課程中培養學員基本的資安技術能力，鼓勵學員積極參與 MyFirstCTF 爭取名次，並以錄取 AIS3 為目標。 SCIST 將於 MyFirstCTF 前一週舉辦資安競賽，讓學員實際體驗賽中競速的刺激感和解題的樂趣，並檢驗學習成果.",
      image: "https://media.discordapp.net/attachments/1022870915492610148/1425819605166723184/-.png?ex=694dd43c&is=694c82bc&hm=f0b0bb0314ace76cdba0e7006db7b3814039ef38876e781b9f38500650897efa&=&format=webp&quality=lossless&width=578&height=723"
    },
  ];

  return (
    <section id="activities" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">
            課程內容
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {activities.map((activity, index) => {
            const contentItems = Array.isArray(activity.content)
              ? activity.content
              : Object.values(activity.content || {});
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg border border-gray-200 hover:border-primary hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold text-primary mb-2">
                  {activity.title}
                </h3>
                {activity.description && (
                  <p className="text-foreground/70 mb-4">{activity.description}</p>
                )}
                {contentItems.length > 0 ? (
                  <ul className="list-disc list-inside space-y-1 text-foreground/80">
                    {contentItems.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-foreground/50 italic">尚未提供內容</p>
                )}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <p className="text-foreground text-sm">{activity.goal}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
