import Header from "../_components/Header";
import BenefitCard from "../_components/BenefitCard";
import BenefitVisual from "../_components/BenefitVisual";
import BenefitPic from "@/public/BenefitPic.png";
import BenefitPic2 from "@/public/BenefitPic.png";

const benefits = [
  {
    type: "card",
    variant: "light",
    title: "Personalized Nutrition",
    description:
      "Get meal plans tailored to your unique dietary needs, preferences, and goals, ensuring a balanced and enjoyable diet.",
  },
  {
    type: "card",
    variant: "text",
    title: "Cost-Effective Shopping",
    description:
      "Reduce food waste and save money with efficient grocery shopping lists that align perfectly with your meal plans.",
  },

  { type: "visual", src: BenefitPic },
  {
    type: "card",
    variant: "text",
    title: "Seamless Grocery Delivery",
    description:
      "Enjoy the convenience of having all your meal ingredients delivered right to your doorstep through our local grocery store partnerships.",
  },

  {
    type: "card",
    variant: "text",
    title: "Time-Saving Convenience",
    description:
      "Say goodbye to meal planning stress. Our AI-driven platform simplifies your weekly meal preparation, saving you valuable time.",
  },
  {
    type: "card",
    variant: "dark",
    title: "Community Support",
    description:
      "Join a community of like-minded individuals, share experiences, recipes, and tips, and get motivated on your journey to healthier eating.",
  },

  {
    type: "card",
    variant: "gray",
    title: "Healthier Eating Habits",
    description:
      "Easily adopt a healthier lifestyle with nutrient-rich meal plans and educational content on nutrition and wellness.",
  },
  { type: "visual", src: BenefitPic2 },
];

function Benefits() {
  return (
    <div className=" md:min-h-screen w-full bg-white relative flex flex-col gap-10 md:gap-14 items-center p-5 md:p-16">
      <div className="flex items-center w-full justify-start">
        <Header
          title={"Benefits"}
          sub={
            "Get meal plans tailored to your unique dietary needs, preferences, and goals, ensuring a balanced and enjoyable diet."
          }
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-4 md:grid-rows-2 grid-flow-col gap-5">
        {benefits.map((item, i) =>
          item.type === "visual" ? (
            <BenefitVisual key={i} src={item.src} />
          ) : (
            <BenefitCard
              key={i}
              variant={item.variant}
              title={item.title}
              description={item.description}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Benefits;
