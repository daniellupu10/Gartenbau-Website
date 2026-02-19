import { Hero } from "@/components/sections/Hero";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { WhyUs } from "@/components/sections/WhyUs";
import { TestimonialSlider } from "@/components/sections/Testimonials";
import { ContactForm } from "@/components/sections/ContactForm";
import { LocationTeaser } from "@/components/sections/LocationTeaser";
import { ProcessAnimation } from "@/components/sections/ProcessAnimation";

export default function Home() {
  return (
    <>
      <Hero />
      <ProcessAnimation />
      <WhyUs />
      <ServiceGrid />
      <LocationTeaser />
      <TestimonialSlider />
      <ContactForm />
    </>
  );
}
