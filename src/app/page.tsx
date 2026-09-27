import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import TechArchitecture from "@/components/TechArchitecture";
import Impact from "@/components/Impact";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";

export default function Home() {
  return (
    <main className="relative">
      <SplashScreen />
      <Navbar />
      <Hero />
      <div className="section-divider" />
      <Problem />
      <div className="section-divider" />
      <Solution />
      <div className="section-divider" />
      <Features />
      <div className="section-divider" />
      <HowItWorks />
      <div className="section-divider" />
      <TechArchitecture />
      <div className="section-divider" />
      <Impact />
      <div className="section-divider" />
      <Team />
      <Footer />
    </main>
  );
}
