import React from "react";
import {
  HeroSection,
  HowItWorksSection,
  TestimonialsSection,
  CTASection,
} from "@/components";
// import {EventsSection} from "@/components/EventsSection";
// import { TestimonialsSection } from "@/components";
// import { CTASection } from "@/components";

const Home: React.FunctionComponent = () => {
  return (
    <>
      <HeroSection />
      {/* <EventsSection /> */}

      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
};

export default Home;
