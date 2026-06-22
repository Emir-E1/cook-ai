function BenefitCard({
  variant = "text", // "text" | "light" | "gray" | "dark"
  title,
  description,
}) {
  const isPill = variant !== "text";

  const containerStyles = {
    text: "",
    light: "bg-primary items-center justify-center text-center",
    gray: "bg-background items-center justify-center text-center",
    dark: "bg-secondary items-center justify-center text-center",
  };

  const titleStyles = {
    text: "",
    light: "",
    gray: "",
    dark: "text-primary",
  };

  const descriptionStyles = {
    text: "",
    light: "",
    gray: "",
    dark: "text-white",
  };

  return (
    <div
      className={`w-full aspect-square md:aspect-[349/556] max-h-[556px] overflow-hidden flex flex-col px-12 gap-5
        ${isPill ? "rounded-full py-10 md:py-20" : "py-10 md:py-20"}
        ${containerStyles[variant]}`}
    >
      <h3
        className={`max-w-[300px] md:text-start text-center ${titleStyles[variant]}`}
      >
        {title}
      </h3>
      <p
        className={`hidden md:block max-w-[294px] ${descriptionStyles[variant]}`}
      >
        {description}
      </p>
    </div>
  );
}

export default BenefitCard;
