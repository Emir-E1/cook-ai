"use client";
import { motion, AnimatePresence } from "motion/react";

import StatCard from "../_components/StatCard";
import coverCard from "@/public/Picture.png";
import coverCard2 from "@/public/Picture2.png";
import coverCard3 from "@/public/Picture3.png";
import coverCard4 from "@/public/Picture4.png";
import { AppleIcon, Carrot, Salad, ShoppingBag } from "lucide-react";
const floatingIcons = [
  {
    icon: ShoppingBag,
    bg: "bg-primary",
    desktopPosition: "top-[30%] left-[20%]",
    delay: 0,
  },
  {
    icon: AppleIcon, // exemple, remplace par tes vraies icônes
    bg: "bg-secondary",
    color: "white",

    desktopPosition: "top-[20%] right-[15%]",
    delay: 0.3,
  },
  {
    icon: Salad,
    color: "black",

    desktopPosition: "bottom-[60%] left-[35%]",
    delay: 0.6,
  },
  {
    icon: Carrot,
    bg: "bg-primary",
    desktopPosition: "bottom-[15%] right-[10%]",
    delay: 0.9,
  },
];
function Hero() {
  return (
    <div className=" max-min-screen md:min-h-screen w-full relative bg-background flex flex-col gap-7 md:gap-14  items-center p-5 pb-5 md:pb-10 md:pt-10 md:p-16">
      <div className="hidden md:block absolute inset-0 pointer-events-none">
        {floatingIcons.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={i}
              className={`absolute ${item.desktopPosition} w-16 h-16 rounded-full ${item.bg} flex items-center justify-center pointer-events-auto`}
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: item.delay,
              }}
            >
              <Icon color={item.color} />
            </motion.div>
          );
        })}
      </div>

      <div className="flex flex-col justify-center text-center max-w-xs md:max-w-[868px] mt-20 md:mt-20 md:gap-10 gap-5">
        <h1>Elevate Your Mealtime with AI-Powered Personalization</h1>
        <p className="text-sub">Effortless Planning, Healthier Eating</p>
      </div>

      <div className="flex md:hidden items-center justify-center gap-4 mt-2">
        {floatingIcons.map((item, i) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={i}
              className={`w-12 h-12 rounded-full ${item.bg} flex items-center justify-center`}
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: item.delay,
              }}
            >
              <Icon />
            </motion.div>
          );
        })}
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

        <div className="hidden md:flex md:justify-center md:flex-col md:gap-8 w-full max-w-[250px] md:col-start-3  justify-self-center">
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
      </div>
    </div>
  );
}

export default Hero;
