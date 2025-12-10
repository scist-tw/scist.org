export default function ActivitiesSection() {
  const activities = [
    {
      title: "技術工作坊",
      description:
        "定期舉辦各類程式設計和技術工作坊，涵蓋Web開發、機器學習等領域。",
    },
    {
      title: "業界講座",
      description: "邀請業界專家分享最新技術趨勢和職涯發展經驗。",
    },
    {
      title: "編程競賽",
      description: "組織各種編程競賽和挑戰賽，提高學生的解題能力。",
    },
    {
      title: "社群交流",
      description: "定期舉辦交流活動，增進社群成員之間的互動與協作。",
    },
  ];

  return (
    <section id="activities" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">
            活動內容
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg border border-gray-200 hover:border-primary hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-bold text-primary mb-3">
                {activity.title}
              </h3>
              <p className="text-foreground/70">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
