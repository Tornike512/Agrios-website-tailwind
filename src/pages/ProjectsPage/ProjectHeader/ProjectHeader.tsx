import projectHeader from "src/assets/project-header.svg";

export function ProjectHeader() {
  return (
    <figure className="mb-[120px]">
      <img
        className="w-full lg:h-[400px] lg:object-cover"
        src={projectHeader}
        alt="Project Header Image"
      />
    </figure>
  );
}

export default ProjectHeader;
