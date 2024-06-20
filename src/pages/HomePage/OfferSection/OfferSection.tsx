import applesImage from "src/assets/apples-image.svg";
import grapesImage from "src/assets/grapes-image.svg";
import plantImage from "src/assets/plant-image-2.svg";
import vegetablesImage from "src/assets/vegetables-image.svg";

export function OfferSection() {
  return (
    <section className="max-w-[1200px] relative w-full flex flex-col items-center pt-[120px]">
      <p className="text-[24px] text-[#EEC044]">Our Services</p>
      <h2 className="text-[48px] text-[#1F1E17] font-bold mb-[50px]">
        What We Offer
      </h2>
      <ul className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-x-[30px]">
        <li className="relative">
          <img src={applesImage} alt="Apple Image" />
          <button className="right-[25px] bottom-[110px] absolute text-[12px] text-[#ffffff] font-bold bg-[#4BAF47] w-fit  px-[25px] py-4 rounded-[10px] hover:bg-[#54c950]">
            Read More
          </button>
        </li>
        <li className="relative">
          <img src={vegetablesImage} alt="Vegetables Image" />
          <button className="right-[25px] bottom-[110px] absolute text-[12px] text-[#ffffff] font-bold bg-[#4BAF47] w-fit px-[25px] py-4 rounded-[10px] hover:bg-[#54c950]">
            Read More
          </button>
        </li>
        <li className="relative">
          <img src={plantImage} alt="Plant Image" />
          <button className="right-[25px] bottom-[110px] absolute text-[12px] text-[#ffffff] font-bold bg-[#4BAF47] w-fit px-[25px] py-4 rounded-[10px] hover:bg-[#54c950]">
            Read More
          </button>
        </li>
        <li className="relative">
          <img src={grapesImage} alt="Grapes Image" />
          <button className="right-[25px] bottom-[110px] absolute text-[12px] text-[#ffffff] font-bold bg-[#4BAF47] w-fit px-[25px] py-4 rounded-[10px] hover:bg-[#54c950]">
            Read More
          </button>
        </li>
      </ul>
      <div className="w-full absolute bottom-[-230px] justify-center grid grid-cols-[1fr_1fr_1fr_1fr] items-center text-lg bg-[#4BAF47] h-[158px] text-white rounded-[10px]">
        <p className="flex justify-center">Agriculture Products</p>
        <p className="flex justify-center">Projects Completed</p>
        <p className="flex justify-center">Satisfied Clients</p>
        <p className="flex justify-center">Experts Farmers</p>
      </div>
    </section>
  );
}

export default OfferSection;
