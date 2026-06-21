import React from "react";
import Image from "next/image";

export default function StatCard({
  imageSrc,
  title,
  subtitle,
  position = "",
  inverted,
}) {
  if (title) {
    return (
      <div
        className={`w-full md:max-w-[290px] md:mt-10 md:aspect-[290/430] bg-white p-4 md:p-6 rounded-3xl flex justify-between md:flex-col ${position}`}
      >
        <div
          className={`flex flex-col gap-3 ${
            inverted ? "md:order-2" : "md:order-1"
          }`}
        >
          <h1>{title}</h1>
          {subtitle && <p className="text-subheading">{subtitle}</p>}
        </div>

        <div
          className={`relative w-full max-h-[100px] md:max-h-full aspect-square rounded-2xl overflow-hidden ${
            inverted ? "md:order-1" : "md:order-2"
          }`}
        >
          <Image
            src={imageSrc}
            fill
            alt={title}
            className="object-cover"
            priority
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`hidden md:block w-full mb-10 max-w-[290px] aspect-[290/430] relative rounded-[32px] overflow-hidden ${position}`}
    >
      <Image
        src={imageSrc}
        fill
        alt="Card cover"
        className="object-cover"
        priority
      />
    </div>
  );
}
