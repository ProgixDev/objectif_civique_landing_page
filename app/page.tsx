import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Journey from "./components/Journey";
import Benefits from "./components/Benefits";
import Pricing from "./components/Pricing";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20 flex-1">
        <Hero />
        <Features />
        <Journey />
        <Benefits />
        <Pricing />
        <Stats />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
