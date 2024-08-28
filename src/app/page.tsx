import HeroSection from "@/components/HeroSection/HeroSection";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="space-y-40">
        <About />
        <Projects />
      </div>
    </>
  );
}
