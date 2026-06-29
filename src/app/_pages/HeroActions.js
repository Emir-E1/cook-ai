"use client";
export function HeroActions() {
  return (
    <div className="hidden md:flex md:flex-col md:gap-8 w-full max-w-[250px] md:col-start-3 justify-self-center">
      <button className="px-10 py-3 rounded-full border-2 border-secondary text-secondary text-body hover:opacity-80 transition-opacity">
        Login
      </button>
      <button className="px-10 py-3 rounded-full border-2 border-primary bg-primary text-secondary text-body hover:text-white transition-all">
        Start Demo
      </button>
    </div>
  );
}
