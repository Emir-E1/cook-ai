"use client";

import StatCard from "../_components/StatCard";
import coverCard from "@/public/Picture.png";
import coverCard2 from "@/public/Picture2.png";
import coverCard3 from "@/public/Picture3.png";
import coverCard4 from "@/public/Picture4.png";

function Hero() {
  return (
    <div className="min-h-screen w-full relative bg-background flex flex-col gap-7 md:gap-14  items-center p-5 pb-5 md:pb-10 md:pt-10 md:p-16">
      <div className="flex flex-col justify-center text-center max-w-xs md:max-w-[868px] mt-20 md:mt-20 md:gap-10 gap-5">
        <h1>Elevate Your Mealtime with AI-Powered Personalization</h1>
        <p className="text-sub">Effortless Planning, Healthier Eating</p>
      </div>
      <div className="flex-1 w-full  flex flex-col   md:grid  md:grid-rows-2 md:grid-cols-5 gap-4 items-center">
        <div className="bg-secondary p-8 rounded-4xl shadow-sm flex flex-col items-center gap-4   justify-self-center   md:max-w-[390px] md:col-start-3 md:row-start-2">
          <div>
            <h1 className="text-primary">30 000 +</h1>
            <p className="text-subheading text-center text-primary">
              Happy Users
            </p>
          </div>
        </div>

        <div className="hidden md:flex md:justify-center md:flex-col md:gap-8 md:max-w-[250px] md:col-start-3 md:row-start-1  justify-self-center">
          <button className="hover:opacity-80 px-10 py-3 text-secondary rounded-full border-2 border-secondary text-body transition-opacity">
            Login
          </button>

          <button className="bg-primary text-body text-secondary px-10 py-3 border-2 border-primary rounded-full hover:text-white transition-all">
            Start Demo
          </button>
        </div>

        <StatCard
          position="md:block    md:col-start-1 md:row-start-1 md:row-span-2 md:justify-self-center"
          imageSrc={coverCard4}
          title={"95%"}
          subtitle={"Improved Eating Habits"}
        />
        <StatCard
          position="md:col-start-4 md:row-start-1 md:row-span-2 md:justify-self-center"
          imageSrc={coverCard3}
          title={"25%"}
          subtitle={"Saved on Groceries"}
          inverted={true}
        />

        <StatCard
          position="md:col-start-5 md:row-start-1 md:row-span-2 md:justify-self-center"
          imageSrc={coverCard2}
        />
        <StatCard
          position="md:col-start-2 md:row-start-1 md:row-span-2 md:justify-self-center"
          imageSrc={coverCard}
        />
        <svg
          className="absolute bottom-0 right-0  max-w-[687px] h-32 translate-y-1/2 pointer-events-none z-10"
          viewBox="0 0 687 203"
          preserveAspectRatio="none"
        >
          <path
            d="M101.5,0 
       A101.5,101.5 0 0 0 101.5,203 
       L687,203 
       L687,0 
       Z"
            fill="var(--color-background)"
          />
        </svg>
      </div>
    </div>
  );
}

export default Hero;
