import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Frameworks from "@/components/landing/Frameworks";
import Features from "@/components/landing/Features";
import CtaBand from "@/components/landing/CtaBand";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Frameworks />
        <Features />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
