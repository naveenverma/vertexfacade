import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import CostEstimator from "@/components/CostEstimator";
import TechSafety from "@/components/TechSafety";
import Investors from "@/components/Investors";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Services />
        <CostEstimator />
        <TechSafety />
        <Investors />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
