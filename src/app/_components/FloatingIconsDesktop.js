"use client";
import { FLOATING_ICONS, FloatingIcon } from "../_pages/Hero";

export function FloatingIconsDesktop() {
  return (
    <div className="hidden md:block absolute inset-0 pointer-events-none">
      {FLOATING_ICONS.map((item, i) => (
        <FloatingIcon
          key={i}
          {...item}
          duration={2}
          className={`absolute ${item.position} w-16 h-16 pointer-events-auto`}
        />
      ))}
    </div>
  );
}
