import Header from "../_components/Header";
import BenefitPic from "@/public/BenefitPic.png";
import PlatePic from "@/public/PlatePic.png";
import CoverPic from "@/public/CoverPic.png";
import RecipeCard from "../_components/RecipeCard";
import Image from "next/image";

function Recipes() {
  return (
    <div className=" w-full bg-white relative flex flex-col gap-10 md:gap-14 items-center p-5 md:p-16">
      <div className="flex items-center w-full justify-start">
        <Header
          title={"Recipes"}
          sub={
            "Recipes crafted by AI, personalized to perfectly align with your unique dietary needs and flavor preferences"
          }
        />
      </div>
      <div className="flex flex-col md:grid md:grid-cols-[1fr_1.5fr]  md:items-stretch  w-full gap-10 md:gap-14 ">
        <section className="flex flex-col md:col-span-1 gap-8  ">
          <RecipeCard
            image={PlatePic}
            title={"Savory Quinoa and Roasted Vegetable Bowl"}
          />
          <RecipeCard
            image={PlatePic}
            variant="accent"
            title={"Herb-Infused Grilled Chicken with Seasonal Greens"}
          />
          <RecipeCard
            image={PlatePic}
            variant="neutral"
            title={"Mediterranean Lentil and Kale Salad"}
          />
        </section>

        <section className="md:col-start-2 relative rounded-[2.5rem] md:w-auto md:aspect-auto w-full  aspect-778/960  overflow-hidden ">
          <Image src={CoverPic} alt="" fill className="object-cover" />
        </section>
      </div>
    </div>
  );
}

export default Recipes;
