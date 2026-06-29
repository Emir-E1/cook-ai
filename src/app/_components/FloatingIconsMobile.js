"use client";
import { FLOATING_ICONS, FloatingIcon } from "../_pages/Hero";

export function FloatingIconsMobile() {
  return (
    <div className="flex md:hidden items-center justify-center gap-4 mt-2">
      {FLOATING_ICONS.map((item, i) => (
        <FloatingIcon key={i} {...item} duration={1} className="w-12 h-12" />
      ))}
    </div>
  );
}
