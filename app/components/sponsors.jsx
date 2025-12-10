export default function PartnersSection() {
  const tiers = [
    {
      title: "協辦單位",
      items: Array.from({ length: 3 }, (_, i) => ({
        name: `協辦單位 #${i + 1}`,
        img: "https://placehold.co/300x180",
      })),
    },
    {
      title: "贊助單位 · 鑽石級",
      items: Array.from({ length: 2 }, (_, i) => ({
        name: `鑽石級贊助 #${i + 1}`,
        img: "https://placehold.co/300x180",
      })),
    },
    {
      title: "贊助單位 · 白金級",
      items: Array.from({ length: 1 }, (_, i) => ({
        name: `白金級贊助 #${i + 1}`,
        img: "https://placehold.co/300x180",
      })),
    },
    {
      title: "贊助單位 · 黃金級",
      items: Array.from({ length: 1 }, (_, i) => ({
        name: `黃金級贊助 #${i + 1}`,
        img: "https://placehold.co/300x180",
      })),
    },
    {
      title: "特別感謝",
      items: Array.from({ length: 2 }, (_, i) => ({
        name: `特別感謝 #${i + 1}`,
        img: "https://placehold.co/300x180",
      })),
    },
  ];

  return (
    <section id="partners" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">合作夥伴</h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto" />
        </div>

        {tiers.map((tier, tIdx) => (
          <div key={tIdx} className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              {tier.title}
            </h3>

            <div className="flex flex-wrap justify-center gap-5">
              {tier.items.map((item, iIdx) => (
                <div
                  key={iIdx}
                  className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all w-full max-w-[300px]"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-40 object-cover rounded-md mb-4 bg-gray-100"
                  />
                  <p className="text-sm font-medium text-foreground text-center">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
