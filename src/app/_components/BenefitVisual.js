import Image from "next/image";

function BenefitVisual({ src, badge = false }) {
  return (
    <div className="relative w-full aspect-square md:aspect-[349/556] max-h-[556px] overflow-hidden rounded-full">
      <Image src={src} fill alt={src} className="object-cover" />
    </div>
  );
}

export default BenefitVisual;
