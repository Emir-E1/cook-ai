import { ArrowRight } from "lucide-react";
import Image from "next/image";
function InsightCard({ image, title }) {
  return (
    <div className="h-full bg-white p-8 flex flex-col items-start w-full max-w-[530px] gap-8 rounded-[34px] ">
      <div className="relative aspect-473/473 w-full ">
        <Image src={image} className="object-cover" />
      </div>

      <h3 className="max-w-80">{title}</h3>

      <button className="py-4 text-body  text-secondary px-10 rounded-4xl bg-primary">
        <div className="flex gap-3 items-center justify-center">
          <h5> Read Article </h5>
          <ArrowRight />
        </div>
      </button>
    </div>
  );
}

export default InsightCard;
