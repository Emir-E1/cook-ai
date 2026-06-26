import Header from "../_components/Header";
import TestimonialCard from "../_components/TestimonialCard";
import EmilyPic from "@/public/EmilyPic.png";
import MarkPic from "@/public/MarkPic.png";
import SarahPic from "@/public/SarahPic.png";
import RebeccaPic from "@/public/RebeccaPic.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote:
      "Since using AIChefMate, I've rediscovered my love for cooking! The meal plans are easy and delicious. It's been a game-changer for my busy lifestyle.",
    name: "Emily R.",
    image: EmilyPic,
    variant: "primary",
  },
  {
    quote:
      "I never knew healthy eating could be this simple and satisfying. Thanks to AIChefMate, my family enjoys diverse, nutritious meals every day.",
    name: "Mark T.",
    image: MarkPic,
    variant: "secondary",
  },
  {
    quote:
      "The grocery savings have been incredible! Plus, every meal feels tailored just for me. I'm eating better and feeling great. A big thumbs up!",
    name: "Sarah J.",
    image: SarahPic,
    variant: "primary",
  },
  {
    quote:
      "Switching to AIChefMate has been a revelation for my meal prep routine. The AI-generated plans are spot-on with my tastes and nutritional needs, making healthy eating effortless and enjoyable.",
    name: "Rebecca S.",
    image: RebeccaPic,
    variant: "primary",
  },
];

function Testimonials() {
  return (
    <div className="w-full bg-white relative flex flex-col gap-10 md:gap-14 items-center p-5 md:p-16">
      <div className="flex items-center w-full justify-start">
        <Header
          title={"Testimonials"}
          sub={
            "Real stories from satisfied users: see how our platform changes lives"
          }
        />
      </div>

      <Carousel className="w-full md:hidden">
        <CarouselContent className={"items-stretch"}>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="basis-4/5 flex">
              <TestimonialCard
                quote={testimonial.quote}
                name={testimonial.name}
                image={testimonial.image}
                variant={testimonial.variant}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="hidden md:flex flex-row gap-6 justify-center md:gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            quote={testimonial.quote}
            name={testimonial.name}
            image={testimonial.image}
            variant={testimonial.variant}
          />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
