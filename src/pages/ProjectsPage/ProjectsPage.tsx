import { ProjectHeader } from "./ProjectHeader";
import { ProjectsGrid } from "./ProjectsGrid";

export function ProjectsPage() {
  return (
    <main className="w-full flex flex-col justify-center items-center">
      <ProjectHeader />
      <ProjectsGrid />
    </main>
  );
}

export default ProjectsPage;
