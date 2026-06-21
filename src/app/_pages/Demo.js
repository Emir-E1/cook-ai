import Image from "next/image";
import Header from "../_components/Header";
import DemoPic from "@/public/DemoPicture.png";
function Demo() {
  return (
    <div className="  min-h-screen w-full bg-white flex flex-col gap-10 md:gap-14 items-center p-5 md:p-16 ">
      <div className="flex items-center w-full justify-start ">
        <Header
          title={"Demo"}
          sub={
            "Step into the world of hassle-free meal planning with our easy 3-step process"
          }
        />
      </div>
      <div className="p-4 border-l-2  -mr-10 md:-mr-20 border-t-2 border-b-2 w-full rounded-l-full   border-secondary">
        <div className="w-full grid grid-cols-2  md:grid-cols-[1.5fr_1fr] gap-2 md:gap-4 ">
          <div className="md:p-10 p-5 items-center border-2 border-secondary   rounded-full">
            <div className="relative aspect-[1045/610]  col-start-1  ">
              <Image src={DemoPic} fill className="object-cover rounded-full" />
            </div>
          </div>
          <div className="col-start-2  flex justify-center  items-center ">
            <h1 className="  max-w-[200px] text-h2 md:text-h1 md:max-w-[400px]">
              Every meal is a chance to nourish your body, inspire your mind,
              and feed your soul.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Demo;
