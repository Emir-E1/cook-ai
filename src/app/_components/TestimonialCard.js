import Image from "next/image";

function TestimonialCard({ quote, name, image, variant = "primary" }) {
  const variantStyles = {
    primary: "bg-background text-secondary",
    secondary: "bg-secondary text-background",
  };

  const quoteMarkStyles = {
    primary: "text-secondary",
    secondary: "text-primary",
  };

  const pillStyles = {
    primary: "bg-secondary text-background",
    secondary: "bg-background text-secondary",
  };

  return (
    <div
      className={`rounded-4xl px-6 py-8 h-full md:px-8 md:py-10 flex flex-col justify-around gap-2 md:min-h-[400px] ${variantStyles[variant]}`}
    >
      <span
        className={`md:hidden self-start text-sm font-medium px-4 py-1.5 rounded-full ${pillStyles[variant]}`}
      >
        {name}
      </span>

      <div className="flex flex-col max-w-4xl gap-3">
        <p
          className={`
        ${quoteMarkStyles[variant]}`}
        >
          {quote}
        </p>
        <span
          className={` hidden md:block text-4xl font-bold self-end leading-none ${quoteMarkStyles[variant]}`}
        >
          &rdquo;
        </span>
      </div>

      <div className="hidden md:flex items-center gap-3">
        <div className="relative w-16 h-16 rounded-full overflow-hidden">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
        <span className="text-body">{name}</span>
      </div>
    </div>
  );
}

export default TestimonialCard;
