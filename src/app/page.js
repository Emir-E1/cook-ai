import Benefits from "./_pages/Benefits";
import Demo from "./_pages/Demo";
import Hero from "./_pages/Hero";
import Works from "./_pages/Works";
import Recipes from "./_pages/Recipes";
import Testimonials from "./_pages/Testimonials";
import Pricing from "./_pages/Pricing";
import Insights from "./_pages/Insights";
import Faq from "./_pages/Faq";
import Assistance from "./_pages/Assistance";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Hero />
      <Demo />
      <Works />
      <Benefits />
      <Recipes />
      <Testimonials />
      <Pricing />
      <Insights />
      <Faq />
      <Assistance />
    </div>
  );
}
