import Benefits from "./_pages/Benefits";
import Demo from "./_pages/Demo";
import Hero from "./_pages/Hero";
import Works from "./_pages/Works";
import Recipes from "./_pages/Recipes";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Hero />
      <Demo />
      <Works />
      <Benefits />
      <Recipes />
    </div>
  );
}
