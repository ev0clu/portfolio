import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="space-y-8 sm:space-y-14">
        <About />
        <Projects />
      </div>
    </>
  );
}
