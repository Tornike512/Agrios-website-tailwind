import { useState } from "react";
import { ProjectsNav } from "../ProjectsNav";

import agricultureHarvesting from "src/assets/agriculture-harvesting.svg";
import easyHarvesting from "src/assets/easy-harvesting.svg";
import ecologicalFarming from "src/assets/ecological-farming.svg";
import freshProducts from "src/assets/fresh-products.svg";
import healthyFood from "src/assets/healthyfood.svg";
import organicSolutions from "src/assets/organic-solutions.svg";

export function ProjectsGrid() {
  const [showProject, setShowProject] = useState<boolean>(false);
  const [projectName, setProjectName] = useState<string>("");

  const handleProjectName = (projectName: string) => {
    setProjectName(projectName);
    setShowProject(true);
  };

  return (
    <>
      {!showProject && (
        <section className="mb-[120px] w-full px-[40px] max-w-[1200px] grid grid-cols-[1fr_1fr_1fr] gap-y-[30px] gap-x-[30px] lg:grid-cols-[1fr_1fr] sm:grid-cols-[1fr]">
          <img
            className="cursor-pointer w-full"
            src={agricultureHarvesting}
            onClick={() => handleProjectName("agricultureFarming")}
            alt="Agriculture Harvesting Image"
          />
          <img
            className="cursor-pointer w-full"
            src={easyHarvesting}
            onClick={() => handleProjectName("easyHarvesting")}
            alt="Easy Harvesting Image"
          />
          <img
            className="cursor-pointer w-full"
            src={ecologicalFarming}
            onClick={() => handleProjectName("ecologicalFarming")}
            alt="Ecological Farming Image"
          />
          <img
            className="cursor-pointer w-full"
            src={freshProducts}
            onClick={() => handleProjectName("freshProduct")}
            alt="Fresh Products Image"
          />
          <img
            className="cursor-pointer w-full"
            src={organicSolutions}
            onClick={() => handleProjectName("organicSolutions")}
            alt="Organic Solutions Image"
          />
          <img
            className="cursor-pointer w-full"
            src={healthyFood}
            onClick={() => handleProjectName("healthyFood")}
            alt="Healthy Food Image"
          />
        </section>
      )}
      {showProject && <ProjectsNav projectName={projectName} />}
    </>
  );
}

export default ProjectsGrid;
