import applesImage from "src/assets/apples-image.svg";
import grapesImage from "src/assets/grapes-image.svg";
import plantImage from "src/assets/plant-image-2.svg";
import vegetablesImage from "src/assets/vegetables-image.svg";

export function OfferSection() {
  return (
    <section className="max-w-[1240px] px-[40px] relative w-full flex flex-col items-center pt-[120px] sm:px-[10px] sm:pt-[60px]">
      <p className="text-[24px] text-[#EEC044]">Our Services</p>
      <h2 className="text-[48px] text-[#1F1E17] font-bold mb-[50px] sm:text-[36px]">
        What We Offer
      </h2>
      <ul className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-x-[30px] lg:grid-cols-[1fr_1fr] lg:gap-y-[30px] sm:grid-cols-[1fr] sm:px-[10px] sm:w-full">
        <li className="relative">
          <img className="xl:w-full" src={applesImage} alt="Apple Image" />
        </li>
        <li className="relative">
          <img
            className="xl:w-full"
            src={vegetablesImage}
            alt="Vegetables Image"
          />
        </li>
        <li className="relative">
          <img className="xl:w-full" src={plantImage} alt="Plant Image" />
        </li>
        <li className="relative">
          <img className="xl:w-full" src={grapesImage} alt="Grapes Image" />
        </li>
      </ul>
    </section>
  );
}

export default OfferSection;
