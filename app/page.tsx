import { Hero } from "@/components/sections/Hero";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { TestimonialSlider } from "@/components/sections/Testimonials";
import { ContactForm } from "@/components/sections/ContactForm";
import { ProcessAnimation } from "@/components/sections/ProcessAnimation";

export default function Home() {
  return (
    <>
      <Hero />
      <ProcessAnimation />
      <ServiceGrid />
      <TestimonialSlider />
      <ContactForm />
    </>
  );
}
