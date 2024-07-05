import { useState, useEffect } from "react";

import axios from "axios";

export default function useGetProjects({}: {}) {
  const [projects, setProjects] = useState<[]>([]);

  async function getProjects() {
    try {
      const response = await axios.get("http://localhost:5000/api/projects");
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
