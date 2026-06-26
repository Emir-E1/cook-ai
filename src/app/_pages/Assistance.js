import Image from "next/image";
import Header from "../_components/Header";
import DemoPic from "@/public/DemoPicture.png";

function Assistance() {
  return (
    <div className="max-h-screen w-full bg-white flex flex-col gap-10 md:gap-14 items-center p-5 md:p-10">
      <div className="flex items-center w-full justify-start">
        <Header title={"Need Assistance ?"} sub={"We’re here to help!"} />
      </div>

      <div className="p-0 md:p-4 border-0 md:border-l-2 md:border-t-2 md:border-b-2 -mr-0 md:-mr-20 w-full rounded-2xl md:rounded-l-full border-secondary">
        <div className="w-full grid grid-cols-1 md:grid-cols-[1.5fr_1fr] items-center gap-6 md:gap-4">
          <div className="relative aspect-[4/3] md:aspect-[1045/610] w-full p-0 md:p-3 border-0 md:border-2 border-secondary rounded-2xl md:rounded-full col-start-1">
            <div className="relative w-full h-full rounded-2xl md:rounded-full overflow-hidden">
              <Image src={DemoPic} fill className="object-cover" />
            </div>
          </div>

          <div className="col-start-1 md:col-start-2 flex justify-center items-center">
            <h1 className="max-w-[280px] text-h2 md:text-h1 md:max-w-[400px] text-center md:text-left">
              Every meal is a chance to nourish your body, inspire your mind,
              and feed your soul.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assistance;
