import { Navbar } from "./components/Navbar.tsx";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServiceCard";

export default function App() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
    </main>
  );
}