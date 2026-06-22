import Header from "../_components/Header";
import BenefitPic from "@/public/BenefitPic.png";
import BenefitPic2 from "@/public/BenefitPic.png";

function Benefits() {
  return (
    <div className="min-h-screen w-full bg-white relative flex flex-col gap-10 md:gap-14 items-center p-5 md:p-16">
      <div className="flex items-center w-full justify-start">
        <Header
          title={"Recipes"}
          sub={
            "Recipes crafted by AI, personalized to perfectly align with your unique dietary needs and flavor preferences"
          }
        />
      </div>
      <div className="flex-1 grid  gird-cols-2"></div>
    </div>
  );
}

export default Benefits;
