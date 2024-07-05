import useGetProjects from "src/hooks/projectsApi";

export function ProjectsNav() {
  const projects = useGetProjects();

  return (
    <>
      {projects.projects.map((project) => {
        return (
          <section
            className="mb-[120px] w-full px-[40px] max-w-[1200px]"
            key={project.id}
          >
            <img className="mb-[40px]" src={project.image} alt="Main Image" />
            <div className="flex">
              <article className="w-full mr-[30px]">
                <h2 className="text-[30px] font-bold mb-[8px]">
                  {project.title}
                </h2>
                <p className="text-[#878680] text-[16px] mb-[33px]">
                  {project.firstDescription}
                </p>
                <p className="text-[16px] font-bold mb-[33px]">
                  {project.secondaryTitle}
                </p>
                <p className="text-[#878680] text-[16px] mb-[33px]">
                  {project.secondaryDescription}
                </p>
                <p className="text-[#878680] text-[16px] mb-[33px]">
                  {project.tertiaryDescription}
                </p>
                <h3 className="text-[33px] font-bold mb-[33px]">Challenges</h3>
                <p className="text-[16px] font-bold mb-[33px] w-[55%] ml-[30px]">
                  {project.challenges}
                </p>
                <p className="text-[#878680] text-[16px] mb-[33px]">
                  {project.footerDescription}
                </p>
              </article>
              <aside className="rounded-[10px] p-[60px] border-t-[#EEC044] border-[5px] w-[40%] shadow-[0px_0px_20px_#e3e3e3] h-fit">
                <p className="text-[14px] text-[#878680]">Services:</p>
                <p className="font-bold text-[16px] mb-[26px]">
                  {project.title}
                </p>
                <p className="text-[14px] text-[#878680]">Farmer:</p>
                <p className="font-bold text-[16px] mb-[26px]">Mike Hardson</p>
                <p className="text-[14px] text-[#878680]">Duration:</p>
                <p className="font-bold text-[16px] mb-[26px]">4.5 Months</p>
                <p className="text-[14px] text-[#878680]">Location:</p>
                <p className="font-bold text-[16px]">Broklyn, New Your</p>
              </aside>
            </div>
          </section>
        );
      })}
    </>
  );
}

export default ProjectsNav;
