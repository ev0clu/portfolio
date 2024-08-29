import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="mt-24 space-y-16 sm:mt-0 sm:space-y-40">
        <About />
        <Projects />
      </div>
    </>
  );
}
