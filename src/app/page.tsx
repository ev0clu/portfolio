import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container">
        <Hero />
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
