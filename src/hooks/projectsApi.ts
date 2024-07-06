import { useState, useEffect } from "react";
import { TProject } from "src/types/Types";

import axios from "axios";

export default function useGetProjects({
  projectName,
}: {
  projectName: string;
}) {
  const [projects, setProjects] = useState<TProject[]>([]);

  async function getProjects() {
    try {
      const response = await axios.get(
        `http://localhost:5000/projects/${projectName}`
      );
      setProjects(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProjects();
  }, []);

  return { projects };
}
