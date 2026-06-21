import Demo from "./_pages/Demo";
import Hero from "./_pages/Hero";
import Works from "./_pages/Works";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Hero />
      <Demo />
      <Works />
    </div>
  );
}
