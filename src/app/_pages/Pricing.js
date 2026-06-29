import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import PricingCard from "../_components/PricingCard";
import PricingVisualCard from "../_components/PricingVisualCard";

const { default: Header } = require("../_components/Header");

function Pricing() {
  return (
    <div className="w-full bg-white relative flex flex-col gap-10 md:gap-14 items-center p-5 md:p-16">
      <div className="flex items-center w-full justify-start">
        <Header
          title="Pricing"
          sub="Find your perfect plan: tailored pricing for every need"
        />
      </div>

      <Carousel className="w-full md:hidden">
        <CarouselContent className="items-stretch">
          <CarouselItem className="basis-[90%] flex">
            <PricingCard plan="premium" />
          </CarouselItem>

          <CarouselItem className="basis-[90%] flex">
            <PricingCard plan="standard" />
          </CarouselItem>
          <CarouselItem className="basis-[90%] flex">
            <PricingCard plan="premium" />
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      <div className="hidden md:flex flex-row w-full justify-center">
        <PricingVisualCard position="left" />
        <PricingCard plan="free" position="left" />
        <PricingCard plan="standard" position="center" />
        <PricingCard plan="premium" position="right" />
        <PricingVisualCard position="right" />
      </div>
    </div>
  );
}

export default Pricing;
