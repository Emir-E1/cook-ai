"use client";
import { motion } from "motion/react";
import StatCard from "../_components/StatCard";
import coverCard from "@/public/Picture.png";
import coverCard2 from "@/public/Picture2.png";
import coverCard3 from "@/public/Picture3.png";
import coverCard4 from "@/public/Picture4.png";
import { AppleIcon, Carrot, Salad, ShoppingBag } from "lucide-react";
import { HappyUsersCard } from "../_components/HappyUsersCard";
import { HeroTitle } from "./HeroTitle";
import { HeroActions } from "./HeroActions";
import { FloatingIconsMobile } from "../_components/FloatingIconsMobile";
import { FloatingIconsDesktop } from "../_components/FloatingIconsDesktop";

export const FLOATING_ICONS = [
  {
    icon: ShoppingBag,
    bg: "bg-primary",
    iconColor: "text-white",
    position: "top-[30%] left-[20%]",
    delay: 0,
  },
  {
    icon: AppleIcon,
    bg: "bg-secondary",
    iconColor: "text-white",
    position: "top-[20%] right-[15%]",
    delay: 0.3,
  },
  {
    icon: Salad,
    bg: "bg-white",
    iconColor: "text-black",
    position: "bottom-[60%] left-[35%]",
    delay: 0.6,
  },
  {
    icon: Carrot,
    bg: "bg-primary",
    iconColor: "text-white",
    position: "bottom-[15%] right-[10%]",
    delay: 0.9,
  },
];

const STATS = [
  {
    position: "md:col-start-1 md:row-start-1 md:row-span-2",
    imageSrc: coverCard4,
    title: "95%",
    subtitle: "Improved Eating Habits",
  },
  {
    position: "md:col-start-4 md:row-start-1 md:row-span-2",
    imageSrc: coverCard3,
    title: "25%",
    subtitle: "Saved on Groceries",
    inverted: true,
  },
  {
    position: "md:col-start-5 md:row-start-1 md:row-span-2",
    imageSrc: coverCard2,
  },
  {
    position: "md:col-start-2 md:row-start-1 md:row-span-2",
    imageSrc: coverCard,
  },
];

export function FloatingIcon({
  icon: Icon,
  bg,
  iconColor,
  className,
  delay,
  duration,
}) {
  return (
    <motion.div
      className={`${className} ${bg} flex items-center justify-center rounded-full`}
      animate={{ y: [0, -6, 0] }}
      transition={{ duration, repeat: Infinity, delay }}
    >
      <Icon className={iconColor} />
    </motion.div>
  );
}

function Hero() {
  return (
    <div className="max-h-screen md:min-h-screen w-full relative bg-background flex flex-col gap-7 md:gap-14 items-center p-5 pb-5 md:pb-10 md:pt-10 md:p-16">
      <FloatingIconsDesktop />
      <HeroTitle />
      <FloatingIconsMobile />

      <div className="flex-1 w-full flex flex-col md:grid md:grid-rows-2 md:grid-cols-5 gap-4 items-center">
        <HappyUsersCard />
        <HeroActions />
        {STATS.map((stat, i) => (
          <StatCard
            key={i}
            {...stat}
            position={`md:block ${stat.position} justify-self-center`}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;
