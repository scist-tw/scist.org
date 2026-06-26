import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import AboutSection from "@/components/about";
import ActivitiesSection from "@/components/activities";
import CalendarSection from "@/components/calendar";
import OrganizationsSection from "@/components/organizations";
import PartnersSection from "@/components/sponsors";
import ContactSection from "@/components/contact";
import ScrollTop from "@/components/scrollTop";
import HackmdSection from "@/components/hackmd";
import YoutubeSection from "@/components/youtube";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <HackmdSection />
      <YoutubeSection />
      <ActivitiesSection />
      <CalendarSection />
      <OrganizationsSection />
      <PartnersSection />
      <ContactSection />
      <ScrollTop />
    </main>
  );
}
