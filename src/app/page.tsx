import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0b1118] text-slate-100 antialiased">
      <Hero />
      <About />
      <Projects />
      <Footer />
    </main>
  );
}
