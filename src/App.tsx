import { Navbar } from "./components/Navbar.tsx";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection.tsx";
import { CasesSection } from "./components/CasesSection.tsx";
import { TeamSection } from "./components/TeamSection.tsx";
import { Footer } from "./components/Footer.tsx";

export default function App() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <CasesSection />
      <TeamSection />
      <Footer />
    </main>
  );
}