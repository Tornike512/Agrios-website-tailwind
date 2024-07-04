import agricultureHarvesting from "src/assets/agriculture-harvesting.svg";
import easyHarvesting from "src/assets/easy-harvesting.svg";
import ecologicalFarming from "src/assets/ecological-farming.svg";
import freshProducts from "src/assets/fresh-products.svg";
import healthyFood from "src/assets/healthyfood.svg";
import organicSolutions from "src/assets/organic-solutions.svg";

export function ProjectsGrid() {
  return (
    <section className="mb-[120px] w-full px-[40px] max-w-[1200px] grid grid-cols-[1fr_1fr_1fr] gap-y-[30px] gap-x-[30px] lg:grid-cols-[1fr_1fr] sm:grid-cols-[1fr]">
      <img
        className="cursor-pointer w-full"
        src={agricultureHarvesting}
        alt="Agriculture Harvesting Image"
      />
      <img
        className="cursor-pointer w-full"
        src={easyHarvesting}
        alt="Easy Harvesting Image"
      />
      <img
        className="cursor-pointer w-full"
        src={ecologicalFarming}
        alt="Ecological Farming Image"
      />
      <img
        className="cursor-pointer w-full"
        src={freshProducts}
        alt="Fresh Products Image"
      />
      <img
        className="cursor-pointer w-full"
        src={organicSolutions}
        alt="Organic Solutions Image"
      />
      <img
        className="cursor-pointer w-full"
        src={healthyFood}
        alt="Healthy Food Image"
      />
    </section>
  );
}

export default ProjectsGrid;
