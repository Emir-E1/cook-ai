"use client";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import DemoPic from "@/public/DemoPicture.png";

import Header from "../_components/Header";

const slides = [
  {
    number: "01",
    title: "Personalize Your Profile",
    text: "Begin by creating your profile. Tell us about your dietary preferences, nutritional goals, and budget. Our AI technology tailors every meal plan to fit your unique needs.",
    image: DemoPic,
  },
  {
    number: "02",
    title: "Get Your Meal Plan",
    text: "Receive a personalized meal plan crafted by our AI, designed around your goals, your taste, and your schedule.",
    image: DemoPic,
  },
  {
    number: "03",
    title: "Enjoy & Adjust",
    text: "Cook, eat, and enjoy. Track your progress and adjust your plan anytime as your needs evolve.",
    image: DemoPic,
  },
];

const STACK_OFFSETS = [
  { rotate: 10, x: 30, y: 10, scale: 0.95, opacity: 0.35 },
  { rotate: -8, x: -25, y: 15, scale: 0.9, opacity: 0.2 },
];

const CARD_ASPECT = "aspect-[516/681]";
const CARD_WIDTH = "w-[250px] md:w-[520px] md:h-[681px]";

function Works() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const goNext = () => {
    setDirection(1);
    setActiveIndex((i) => {
      if (i === slides.length - 1) return 0;
      return i + 1;
    });
  };

  const goPrev = () => {
    setDirection(-1);
    setActiveIndex((i) => {
      if (i === 0) return slides.length - 1;
      return i - 1;
    });
  };

  const activeSlide = slides[activeIndex];

  const getSlideIndexAfter = (offset) => {
    const total = slides.length;
    let nextIndex = activeIndex + offset;
    if (nextIndex >= total) {
      nextIndex = nextIndex - total;
    }
    return nextIndex;
  };

  const stackedSlides = STACK_OFFSETS.map((offsetStyle, i) => {
    const slideIndex = getSlideIndexAfter(i + 1);
    return { slide: slides[slideIndex], offsetStyle };
  });

  return (
    <div className="min-h-screen w-full bg-background relative flex flex-col gap-10 md:gap-14 items-center p-5 md:p-16">
      <div className="flex items-center w-full justify-start">
        <Header
          title={"How it works"}
          sub={
            "Step into the world of hassle-free meal planning with our easy 3-step process"
          }
        />
      </div>

      <div className="flex-1  flex flex-col  md:grid  md:grid-cols-[1fr_2fr] gap-4 md:gap-10 w-full">
        <div className="col-start-1 flex flex-col justify-start gap-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="order-2 md:order-none"
            >
              <div>
                <h3 className="mb-2 text-h1">{activeSlide.number}</h3>
                <h3>{activeSlide.title}</h3>
              </div>
              <p className="text-body mt-5 md:mt-10">{activeSlide.text}</p>
            </motion.div>
          </AnimatePresence>
          <div className="flex gap-4 md:justify-start justify-center mt-12 order-1 md:order-none">
            <button
              onClick={goPrev}
              className="px-6 py-4 rounded-4xl border-2 border-secondary"
            >
              <ArrowLeft color={"#213d34"} />
            </button>
            <button
              onClick={goNext}
              className="bg-primary px-6 py-4 rounded-4xl border-2 border-secondary"
            >
              <ArrowRight color={"#213d34"} />
            </button>
          </div>
          <h3 className=" mt-5 md:mt-32 order-3 md:order-none">
            0{activeIndex + 1}/0{slides.length}
          </h3>
        </div>
        <div className="relative md:col-start-2 w-full min-h-[400px] md:min-h-[500px] flex items-center justify-center order-3 md:order-none">
          {stackedSlides.map(({ slide, offsetStyle }) => (
            <div
              key={`stacked-${slide.number}`}
              className={`absolute rounded-3xl  ${CARD_ASPECT} ${CARD_WIDTH} overflow-hidden`}
              style={{
                transform: `rotate(${offsetStyle.rotate}deg) translate(${offsetStyle.x}px, ${offsetStyle.y}px) scale(${offsetStyle.scale})`,
                opacity: offsetStyle.opacity,
                zIndex: 0,
              }}
            >
              <Image src={slide.image} alt="" fill className=" object-cover" />
            </div>
          ))}

          <AnimatePresence custom={direction} mode="popLayout">
            <motion.div
              key={activeIndex}
              custom={direction}
              initial={{
                opacity: 0,
                rotate: direction > 0 ? -45 : 45,
                x: direction > 0 ? -150 : 150,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                rotate: 0,
                x: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                rotate: direction > 0 ? 45 : -45,
                x: direction > 0 ? 150 : -150,
                scale: 0.8,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className={`absolute z-10 origin-bottom-left rounded-3xl  ${CARD_ASPECT} ${CARD_WIDTH} overflow-hidden shadow-xl ring-2 ring-secondary`}
            >
              <Image
                src={activeSlide.image}
                alt=""
                fill
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      {/*
      <svg
        className="absolute bottom-0 left-0 w-[200px] sm:w-[450px] lg:w-[687px] aspect-[687/203] translate-y-1/2 pointer-events-none z-10 scale-x-[-1]"
        viewBox="0 0 687 203"
        preserveAspectRatio="xMinYMin meet"
      >
        <path
          d="M101.5,0 A101.5,101.5 0 0 0 101.5,203 L687,203 L687,0 Z"
          fill="var(--color-background)"
        />
      </svg>*/}
    </div>
  );
}

export default Works;
