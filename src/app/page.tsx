import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="space-y-14">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
