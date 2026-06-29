import Image from "next/image";
import Header from "../_components/Header";
import DemoPic from "@/public/AssistancePic.png";
import Footer from "../_components/Footer";

function Assistance() {
  return (
    <>
      <div className="relative w-full bg-white flex flex-col gap-10 md:gap-14 items-center p-5 md:p-10">
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

            <div className="col-start-1 md:col-start-2 flex flex-col justify-center items-center gap-4 md:gap-6">
              <h3 className="max-w-[280px] md:max-w-[480px] text-center md:text-left">
                Have questions or need help with AIChefMate? Our dedicated
                support team is ready to assist you. Get the answers and
                assistance you need to make the most of your meal planning
                experience.
              </h3>
              <button className="bg-primary py-2 px-8 md:py-4 md:px-16 rounded-full text-sm md:text-base">
                Get Support
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Assistance;
