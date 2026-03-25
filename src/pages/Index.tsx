import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const Features = lazy(() => import("@/components/Features"));
const HowItWorks = lazy(() => import("@/components/HowItWorks"));
const Pricing = lazy(() => import("@/components/Pricing"));
const CTA = lazy(() => import("@/components/CTA"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Suspense fallback={null}>
        <Features />
        <HowItWorks />
        <Pricing />
        <CTA />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
