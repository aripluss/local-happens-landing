import React from "react";
import {
  HeroSection,
  PreviewSection,
  HowItWorksSection,
  TestimonialsSection,
  CTASection,
} from "@/components";

const Home: React.FunctionComponent = () => {
  return (
    <>
      <HeroSection />
      <PreviewSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
};

export default Home;
