import agricultureHarvesting from "src/assets/agriculture-harvesting.svg";
import easyHarvesting from "src/assets/easy-harvesting.svg";
import ecologicalFarming from "src/assets/ecological-farming.svg";
import freshProducts from "src/assets/fresh-products.svg";
import healthyFood from "src/assets/healthy-hood.svg";
import organicSolutions from "src/assets/organic-solutions.svg";

export function ProjectsGrid() {
  return (
    <figure className="mb-[120px] w-full max-w-[1200px] grid grid-cols-[1fr_1fr_1fr] gap-y-[30px]">
      <img
        className="cursor-pointer"
        src={agricultureHarvesting}
        alt="Agriculture Harvesting Image"
      />
      <img
        className="cursor-pointer"
        src={easyHarvesting}
        alt="Easy Harvesting Image"
      />
      <img
        className="cursor-pointer"
        src={ecologicalFarming}
        alt="Ecological Farming Image"
      />
      <img
        className="cursor-pointer"
        src={freshProducts}
        alt="Fresh Products Image"
      />
      <img
        className="cursor-pointer"
        src={organicSolutions}
        alt="Organic Solutions Image"
      />
      <img
        className="cursor-pointer"
        src={healthyFood}
        alt="Healthy Food Image"
      />
    </figure>
  );
}

export default ProjectsGrid;
