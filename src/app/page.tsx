import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0b1118] text-slate-100 antialiased">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
}
