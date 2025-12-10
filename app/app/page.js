import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import AboutSection from "@/components/about";
import ActivitiesSection from "@/components/activities";
import OrganizationsSection from "@/components/organizations";
import PartnersSection from "@/components/sponsors";
import ContactSection from "@/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AboutSection />
      <ActivitiesSection />
      <OrganizationsSection />
      <PartnersSection />
      <ContactSection />
    </main>
  );
}
