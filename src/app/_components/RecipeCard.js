import { ArrowRight } from "lucide-react";
import Image from "next/image";

function RecipeCard({
  title,
  image,
  variant = "light",
  imagePosition = "right",
}) {
  const variantStyles = {
    light: "bg-white border-2 border-secondary",
    accent: "bg-primary rounded-full flex-row-reverse",
    neutral: "bg-stone-100",
  };

  return (
    <div
      className={`rounded-[34px] px-5 py-7 md:px-10 md:py-14 flex items-center  justify-center  gap-4 md:gap-9 ${
        variantStyles[variant]
      } ${imagePosition === "left" ? "flex-row-reverse" : ""}`}
    >
      <div className="flex flex-col gap-4">
        <h4 className="max-w-xs">{title}</h4>
        <button className="self-start justify-center   flex items-center gap-2 px-6 py-4 rounded-full border-2 border-secondary bg-primary">
          Learn More <ArrowRight size={16} color={"#213d34"} />
        </button>
      </div>

      <div className="relative w-full max-w-28  md:max-w-[220px] aspect-square  rounded-full overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
    </div>
  );
}

export default RecipeCard;
