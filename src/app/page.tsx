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
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import CursorGlow from "@/components/CursorGlow";

import SectionIndicator from "@/components/SectionIndicator";
import PresentationControls from "@/components/PresentationControls";

export default function Home() {
  return (
    <main className="relative">
      <SplashScreen />
      <ScrollProgress />
      <CursorGlow />
      <SectionIndicator />
      <PresentationControls />
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
      <BackToTop />
    </main>
  );
}
