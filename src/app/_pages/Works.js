"use client";
import Header from "../_components/Header";

function Works() {
  return (
    <div className="  min-h-screen w-full bg-background relative flex flex-col gap-10 md:gap-14 items-center p-5 md:p-16">
      <div className="flex items-center w-full justify-start ">
        <Header
          title={" How it works"}
          sub={
            "Step into the world of hassle-free meal planning with our easy 3-step process"
          }
        />
      </div>
      <div className="flex-1 grid grid-cols-[1fr_2fr]">
        <div className="col-start-1 flex flex-col justify-start gap-4">
          <h3 className="text-h1">01</h3>
          <h3>Personalize Your Profile</h3>
          <p className="text-body">
            Begin by creating your profile. Tell us about your dietary
            preferences, nutritional goals, and budget. Our AI technology
            tailors every meal plan to fit your unique needs.
          </p>
        </div>
      </div>
      <svg
        className="absolute bottom-0 left-0  max-w-[687px] h-32 translate-y-1/2 pointer-events-none z-10"
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
  );
}

export default Works;
