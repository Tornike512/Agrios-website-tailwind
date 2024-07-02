import projectHeader from "src/assets/project-header.svg";

export function ProjectHeader() {
  return (
    <figure className="mb-[120px]">
      <img className="w-full" src={projectHeader} alt="Project Header Image" />
    </figure>
  );
}

export default ProjectHeader;