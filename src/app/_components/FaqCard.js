import { ArrowBigDown, ArrowDown } from "lucide-react";

function FaqCard({ title, description }) {
  return (
    <div className="p-12 bg-background rounded-4xl  flex  items-start gap-10">
      <button className="bg-primary py-6 px-4 border-2 border-secondary rounded-full">
        <ArrowDown />
      </button>
      <section className="flex flex-col max-w-[600px] justify-start gap-7">
        <h4>{title}</h4>
        <p className="text-body">{description}</p>
      </section>
    </div>
  );
}

export default FaqCard;
