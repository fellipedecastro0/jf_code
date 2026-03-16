import { Navbar } from "./components/Navbar"
import { HeroSection } from "./components/HeroSection"
import { ServicesSection } from "./components/ServicesSection"
import { CasesSection } from "./components/CasesSection"
import { TeamSection } from "./components/TeamSection"
import { Footer } from "./components/Footer"

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