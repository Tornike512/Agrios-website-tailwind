import agronomyImage from "src/assets/agronomy-image.svg";
import foodProductionImage from "src/assets/food-production-image.svg";

export function NewsSection() {
  return (
    <article className="flex flex-col items-center justify-center w-full max-w-[1240px] mb-[113px] px-[40px]">
      <h4 className="text-[24px] text-[#EEC044]">From the Blog</h4>
      <h2 className="text-[48px] text-[#1F1E17] font-bold leading-[55px] mb-[50px] md:text-[36px]">
        News & Articles
      </h2>
      <figure className="grid grid-cols-[1fr_1fr_1fr] lg:grid-cols-[1fr] lg:gap-y-[15px]">
        <img
          className="cursor-pointer w-full"
          src={foodProductionImage}
          alt="Wheat Farming Image"
        />
        <img
          className="ml-[8px] cursor-pointer w-full"
          src={foodProductionImage}
          alt="Wheat Farming Image"
        />
        <img
          className="cursor-pointer w-full"
          src={agronomyImage}
          alt="Agronomy Image"
        />
      </figure>
    </article>
  );
}

export default NewsSection;
