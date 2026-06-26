import Header from "../_components/Header";
import InsightCard from "../_components/InsightCard";
import InsightPic1 from "@/public/InsightPic1.png";
import InsightPic2 from "@/public/InsightPic2.png";
import InsightPic3 from "@/public/InsightPic3.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const insights = [
  {
    image: InsightPic1,
    title: "Mastering Meal Prep: Time-Saving Tips for Busy Weekdays",
  },
  {
    image: InsightPic2,
    title: "The Power of Plant-Based: Benefits Beyond the Plate",
  },
  {
    image: InsightPic3,
    title: "Balancing Nutrients: A Guide to a Well-Rounded Diet",
  },
];

function Insights() {
  return (
    <div className="w-full bg-background relative flex flex-col gap-10 md:gap-14 items-center p-5 md:p-16">
      <div className="flex items-center w-full justify-start">
        <Header
          title={"Healthy Insights"}
          sub={"Latest News, Expert Blogs, and Nutritional Learning"}
        />
      </div>

      <Carousel className="w-full md:hidden">
        <CarouselContent>
          {insights.map((insight, index) => (
            <CarouselItem key={index}>
              <InsightCard image={insight.image} title={insight.title} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="hidden md:flex w-full justify-center gap-5">
        {insights.map((insight, index) => (
          <InsightCard
            key={index}
            image={insight.image}
            title={insight.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Insights;
