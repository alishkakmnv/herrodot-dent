import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { CalculatorSection } from "@/components/sections/CalculatorSection";
import { Doctors } from "@/components/sections/Doctors";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Reviews } from "@/components/sections/Reviews";
import { FAQ } from "@/components/sections/FAQ";
import { AppointmentSection } from "@/components/sections/AppointmentSection";
import { ContactsFooter } from "@/components/sections/ContactsFooter";
import { FloatingActions } from "@/components/sections/FloatingActions";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <CalculatorSection />
      <Doctors />
      <BeforeAfter />
      <Reviews />
      <FAQ />
      <AppointmentSection />
      <ContactsFooter />
      <FloatingActions />
    </main>
  );
};

export default Index;
