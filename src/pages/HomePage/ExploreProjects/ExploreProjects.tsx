import harvestingImage from "src/assets/harvesting-image.svg";
import tractorFarmingImage from "src/assets/tractor-farming-image.svg";
import wheatFarmingImage from "src/assets/wheat-farming-image.svg";

export function ExploreProjects() {
  return (
    <section className="w-full max-w-[1520px] px-[40px] my-[120px] sm:px-[20px]">
      <p className="flex justify-center text-[24px] text-[#EEC044]">
        Recently Completed
      </p>
      <h2 className="flex justify-center text-[48px] text-[#1F1E17] font-bold mb-[50px] sm:text-[36px]">
        Explore Projects
      </h2>
      <figure className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-x-2.5 lg:grid-cols-[1fr_1fr] lg:gap-y-2.5 sm:grid-cols-[1fr]">
        <img
          className="w-full cursor-pointer"
          src={harvestingImage}
          alt="Wheat Image"
        />
        <img
          className="w-full cursor-pointer"
          src={tractorFarmingImage}
          alt="Tractor Image"
        />
        <img
          className="w-full cursor-pointer"
          src={harvestingImage}
          alt="Wheat Image"
        />
        <img
          className="w-full cursor-pointer"
          src={wheatFarmingImage}
          alt="Wheat Farming Image"
        />
      </figure>
    </section>
  );
}

export default ExploreProjects;
