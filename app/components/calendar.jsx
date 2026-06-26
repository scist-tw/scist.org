"use client";
import FadeInSection from "./FadeInSection";

export default function CalendarSection() {
  return (
    <section id="calendar" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection className="mb-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4 text-balance">
              &lt;公開日曆/&gt;
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full mx-auto" />
          </div>
        </FadeInSection>

        <FadeInSection
          threshold={0.1}
          persistVisibility={true}
          className="rounded-lg border border-gray-200 overflow-hidden bg-white"
        >
          <div className="w-full h-[550px]">
            <iframe
              title="SCIST Calendar"
              src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FTaipei&bgcolor=%23ffffff&src=Y19jMzBmYmEzMGY4NWM2MThjNmU2ZDFhODk3N2QyMzg3NGQ3ZDAzYzQ3ZjdhMmNiZGM0Njg2MTNlZjljNmVhNzk3QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20"
              className="w-full h-full"
              frameBorder="0"
              scrolling="no"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
