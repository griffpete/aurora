import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Solutions } from "@/components/Solutions";
import { Gallery } from "@/components/Gallery";
import { About } from "@/components/About";
import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <div className="bg-black">
      <Navigation />
      <Hero />
      <Features />
      <Solutions />
      <Gallery />
      <About />
      <CTA />

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-white/40">
            © 2025 Trimlight. Elevating homes with permanent LED lighting
            solutions.
          </p>
        </div>
      </footer>
    </div>
  );
}
