import { ArrowBigDown, ArrowDown } from "lucide-react";

function FaqCard({ title, description }) {
  return (
    <div className="p-6 md:p-12 bg-background rounded-3xl md:rounded-4xl flex items-start gap-4 md:gap-10 w-full">
      <button className="bg-primary py-4 px-3 md:py-6 md:px-4 border-2 border-secondary rounded-full shrink-0">
        <ArrowDown className="w-4 h-4 md:w-5 md:h-5" />
      </button>
      <section className="flex flex-col max-w-full md:max-w-[600px] justify-start gap-3 md:gap-7">
        <h4>{title}</h4>
        <p className="text-body">{description}</p>
      </section>
    </div>
  );
}

export default FaqCard;
