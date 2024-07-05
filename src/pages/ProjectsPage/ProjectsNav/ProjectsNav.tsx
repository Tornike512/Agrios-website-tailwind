import useGetProjects from "src/hooks/projectsApi";

export function ProjectsNav() {
  const projects = useGetProjects();

  return (
    <>
      {projects.projects.map((project) => {
        return (
          <section key={project.id}>
            <img src={project.image} alt="Main Image" />
            <div>
              <h2>{project.title}</h2>
              <p>{project.firstDescription}</p>
              <strong>{project.secondaryTitle}</strong>
              <p>{project.secondaryDescription}</p>
              <p>{project.tertiaryDescription}</p>
              <h3>Challenges</h3>
              <strong>{project.challenges}</strong>
              <p>{project.footerDescription}</p>
            </div>
            <aside>
              <p></p>
              <strong></strong>
              <p></p>
              <strong></strong>
              <p></p>
              <strong></strong>
              <p></p>
              <strong></strong>
            </aside>
          </section>
        );
      })}
    </>
  );
}

export default ProjectsNav;
