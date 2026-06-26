import Image from "next/image";
import PricePic1 from "@/public/PricePic1.png";
import PricePic2 from "@/public/PricePic2.png";
function PricingVisualCard({ position }) {
  return (
    <div className=" hidden md:block aspect-130/781 overflow-hidden relative ">
      <Image
        src={position === "left" ? PricePic1 : PricePic2}
        fill
        className="object-contain"
      />
    </div>
  );
}

export default PricingVisualCard;
