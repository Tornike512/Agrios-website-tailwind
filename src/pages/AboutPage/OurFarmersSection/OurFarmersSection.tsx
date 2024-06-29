import kevinSmith from "src/assets/kevin-smith.svg";
import jessicaBrown from "src/assets/jessica-brown.svg";
import davidMartin from "src/assets/david-martin.svg";

export function OurFarmersSection() {
  return (
    <section className="w-full max-w-[1200px] mb-[120px] flex items-center justify-center flex-col px-[40px]">
      <h5 className="text-[#EEC044] text-[24px] flex justify-center">
        Team Members
      </h5>
      <h2 className="flex justify-center text-[48px] mb-[50px] text-[#1F1E17] leading-[50px] font-bold sm:text-[36px]">
        Meet Our Farmers
      </h2>
      <figure className="grid grid-cols-[1fr_1fr_1fr] gap-x-[30px] md:grid-cols-[1fr] md:gap-y-[20px]">
        <img className="w-full" src={kevinSmith} alt="Kevin Smith's farm" />
        <img className="w-full" src={jessicaBrown} alt="Jessica Brown's farm" />
        <img className="w-full" src={davidMartin} alt="David Martin's farm" />
      </figure>
    </section>
  );
}

export default OurFarmersSection;
